import { useState } from "react";
import { motion } from "framer-motion";
import { useProjects, Project } from "@/context/ProjectContext";
import {
    Plus, Edit2, Trash2, Globe, ExternalLink,
    Layout, Shield, LogOut, CheckCircle, X
} from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const Admin = () => {
    const { projects, addProject, updateProject, deleteProject } = useProjects();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [isEditing, setIsEditing] = useState<string | null>(null);
    const [form, setForm] = useState({
        title: "",
        category: "",
        desc: "",
        longDesc: "",
        image: "",
        link: "",
        features: "",
        tech: ""
    });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsAuthenticated(true);
            toast.success("Welcome back, Admin!");
        } else {
            toast.error("Incorrect password.");
        }
    };

    const handleAddOrUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        const projectData = {
            ...form,
            features: form.features.split('\n').filter(f => f.trim() !== ''),
            tech: form.tech.split(',').map(t => t.trim()).filter(t => t !== '')
        };

        if (isEditing) {
            updateProject(isEditing, projectData);
            toast.success("Project updated successfully!");
        } else {
            addProject(projectData);
            toast.success("New project added!");
        }
        resetForm();
    };

    const resetForm = () => {
        setIsEditing(null);
        setForm({
            title: "",
            category: "",
            desc: "",
            longDesc: "",
            image: "",
            link: "",
            features: "",
            tech: ""
        });
    };

    const startEdit = (project: Project) => {
        setIsEditing(project.id);
        setForm({
            title: project.title,
            category: project.category,
            desc: project.desc,
            longDesc: project.longDesc || "",
            image: project.image,
            link: project.link,
            features: project.features ? project.features.join('\n') : "",
            tech: project.tech ? project.tech.join(', ') : ""
        });
    };

    if (!isAuthenticated) {
        return (
            <main className="min-h-screen pt-32 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-8 w-full max-w-md"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-heading font-bold text-center mb-6">Admin Access</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Enter Admin Password"
                            className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="glow-button w-full py-3 rounded-lg text-sm font-semibold">
                            Enter Dashboard
                        </button>
                    </form>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="pt-24 pb-20">
            <SEO title="Admin Dashboard" noindex />
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-heading font-bold gradient-text">Project Dashboard</h1>
                        <p className="text-muted-foreground mt-1">Manage your website portfolio and recent works.</p>
                    </div>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
                    >
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-1">
                        <div className="glass-card p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-heading font-bold flex items-center gap-2 text-lg text-primary">
                                    {isEditing ? <Edit2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    {isEditing ? "Edit Project" : "Add New Project"}
                                </h2>
                                {isEditing && (
                                    <button onClick={resetForm} className="text-muted-foreground hover:text-foreground">
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>

                            <form onSubmit={handleAddOrUpdate} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Project Title</label>
                                    <input
                                        placeholder="e.g. Project Name"
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-primary/50 outline-none"
                                        value={form.title}
                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</label>
                                    <input
                                        placeholder="e.g. Category"
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-primary/50 outline-none"
                                        value={form.category}
                                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Project Image</label>
                                    <div className="space-y-3">
                                        {form.image && (
                                            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-secondary/30">
                                                <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => setForm({ ...form, image: "" })}
                                                    className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        )}
                                        <label className={`
                      flex flex-col items-center justify-center w-full h-32 
                      border-2 border-dashed border-white/10 rounded-lg 
                      hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer
                      ${form.image ? 'hidden' : 'flex'}
                    `}>
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <Layout className="w-8 h-8 text-muted-foreground mb-2" />
                                                <p className="text-sm text-muted-foreground">Click to upload image</p>
                                                <p className="text-[10px] text-muted-foreground/60 uppercase mt-1">PNG, JPG, WEBP (Max 1MB)</p>
                                            </div>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        if (file.size > 1024 * 1024) {
                                                            toast.error("Image too large! Please use images under 1MB.");
                                                            return;
                                                        }
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            setForm({ ...form, image: reader.result as string });
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Website Link</label>
                                    <input
                                        placeholder="https://..."
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-primary/50 outline-none"
                                        value={form.link}
                                        onChange={(e) => setForm({ ...form, link: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Short Description</label>
                                    <textarea
                                        rows={2}
                                        placeholder="Brief overview for the card..."
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-primary/50 outline-none resize-none"
                                        value={form.desc}
                                        onChange={(e) => setForm({ ...form, desc: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Project Overview (Long)</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Detailed description for the popup..."
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-primary/50 outline-none resize-none"
                                        value={form.longDesc}
                                        onChange={(e) => setForm({ ...form, longDesc: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Features (One per line)</label>
                                    <textarea
                                        rows={4}
                                        placeholder="24/7 Support&#10;Mobile Friendly&#10;Fast Loading"
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-primary/50 outline-none resize-none"
                                        value={form.features}
                                        onChange={(e) => setForm({ ...form, features: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Technologies (Comma separated)</label>
                                    <input
                                        placeholder="React, Tailwind, Node.js"
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-primary/50 outline-none"
                                        value={form.tech}
                                        onChange={(e) => setForm({ ...form, tech: e.target.value })}
                                    />
                                </div>
                                <button className="glow-button w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                                    <CheckCircle className="w-4 h-4" />
                                    {isEditing ? "Save Changes" : "Create Project"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* List */}
                    <div className="lg:col-span-2">
                        <div className="space-y-4">
                            {projects.length === 0 ? (
                                <div className="glass-card p-10 text-center text-muted-foreground">
                                    No projects to display. Add your first one!
                                </div>
                            ) : (
                                projects.map((project) => (
                                    <motion.div
                                        layout
                                        key={project.id}
                                        className="glass-card p-4 flex flex-col sm:flex-row gap-5 group"
                                    >
                                        <div className="w-full sm:w-40 h-24 rounded-lg overflow-hidden bg-secondary relative shrink-0">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap gap-2 mb-1">
                                                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded tracking-widest uppercase">{project.category}</span>
                                            </div>
                                            <h3 className="text-lg font-heading font-bold mb-1 truncate">{project.title}</h3>
                                            <p className="text-xs text-muted-foreground line-clamp-2">{project.desc}</p>
                                        </div>
                                        <div className="flex sm:flex-col justify-end gap-2 shrink-0">
                                            <button
                                                onClick={() => startEdit(project)}
                                                className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                                title="Edit Project"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => deleteProject(project.id)}
                                                className="p-2 rounded-lg bg-white/5 hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                                                title="Delete Project"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 text-muted-foreground hover:text-accent transition-colors"
                                                title="Visit Link"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Admin;
