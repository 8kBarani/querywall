"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Search, Lock, ArrowRight, Github, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-zinc-700 selection:text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/30 blur-[120px] rounded-full" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold text-xl tracking-tight">Querywall</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#security" className="hover:text-white transition-colors">Security</Link>
            <Link href="#docs" className="hover:text-white transition-colors">Docs</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/5">
              Login
            </Button>
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-6">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative pt-32 pb-20 px-6">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-400 mb-8"
          >
            <Activity className="w-4 h-4 text-green-500" />
            <span>Protecting 1M+ queries daily</span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent"
          >
            The firewall for your <br /> database queries.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Stop SQL injections, enforce rate limits, and monitor query performance 
            in real-time. Secure your data layer with one line of code.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-zinc-200 rounded-full w-full sm:w-auto">
              Start Protecting Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 rounded-full w-full sm:w-auto">
              <Github className="mr-2 w-5 h-5" />
              View on GitHub
            </Button>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section id="features" className="max-w-7xl mx-auto mt-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Lock className="w-6 h-6" />,
                title: "SQLi Protection",
                description: "Advanced pattern matching and AST analysis to block malicious payloads before they hit your database."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Rate Limiting",
                description: "Granular control over query frequency per user or IP to prevent resource exhaustion and scraping."
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Query Insight",
                description: "Real-time visibility into query latency, volume, and performance bottlenecks across your stack."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="p-8 bg-zinc-900/50 border-white/5 hover:border-white/10 transition-colors group h-full">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-40 text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">Ready to secure your data?</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto relative">
              Join thousands of developers who trust Querywall to protect their most sensitive information.
            </p>
            <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-zinc-200 rounded-full relative">
              Get Started for Free
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>© 2026 Querywall Inc.</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
