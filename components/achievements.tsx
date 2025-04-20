"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Star, Medal } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Hackathon and Tech Competitions",
    description:
      "🥇 1st Place – Hackcraft | 🥈 2nd Place – Code Sangam , Finalist in major hackathons like Code4Cause and Code4Cause 2.0",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Job Simulations",
    description: "Completed virtual job simulations with PwC, Accenture, KPMG, Tata & British Airways",
    icon: Award,
  },
  {
    id: 3,
    title: "Leadership Roles",
    description: "Appointed Student Placement Coordinator at GITM; currently leading as President of Social Insights Club and CS Tech Manager at Team Sankalp.",
    icon: Star,
  },
  {
    id: 4,
    title: "Contribution",
    description: "Built impactful projects like a Mental Health Chatbot & Organ Donation Portal",
    icon: Medal,
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="achievements" ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tl from-primary/20 to-transparent" />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Recognition and accomplishments throughout my professional journey.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
                        <achievement.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                        <p className="text-foreground/80">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
