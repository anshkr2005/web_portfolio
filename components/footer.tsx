"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/90 border-t border-border/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-0"
            >
              <Link href="#home" className="text-2xl font-bold text-primary">
                Portfolio
              </Link>
              <p className="text-foreground/60 mt-2">Building digital experiences that matter.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-6"
            >
              <motion.a
                href="https://github.com/anshkr2005"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ansh-kumar-95a84a28a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:mr.anshkumar8700@gmail.com"
                whileHover={{ y: -5 }}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://x.com/anshkrupadhyay"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-border/10 mt-8 pt-8 text-center"
          >
            <p className="text-foreground/60 text-sm">© {currentYear} Your Name. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
