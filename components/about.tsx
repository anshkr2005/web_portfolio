"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "UI/UX Design",
  "Responsive Design",
  "RESTful APIs",
  "GraphQL",
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" ref={ref} className="py-20 bg-background/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
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
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded-lg transform rotate-6" />
                <div className="absolute inset-0 bg-background/80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <div>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-4">
                Who am I?
              </motion.h3>
              <motion.p variants={itemVariants} className="text-foreground/80 mb-6">
                I&apos;’m Ansh Kumar — a passionate developer with a strong focus on creating beautiful, functional, and user-friendly applications. With several years of experience in web development, I specialize in building modern web applications using the latest technologies. I take pride in crafting clean, efficient, and scalable code that brings ideas to life and enhances user experiences.

My journey in tech began when I discovered my passion for problem-solving and creating digital experiences. Since then, I’ve worked on numerous projects, constantly learning and improving my skills to deliver high-quality solutions.

Currently pursuing B.Tech in Artificial Intelligence and Data Science, I bring a dynamic blend of leadership, innovation, and hands-on experience in development and real-world problem-solving.

Over the years, I’ve led from the front — as the Student Placement Coordinator at GITM, President of the Social Insights Club, Joint Secretary of Capture Crew, and CS Tech Manager at Team Sankalp. Each role has shaped me into a collaborative leader who thrives on turning ideas into impactful results.

I’ve proven my technical and creative strengths by securing:

🥇 1st Place at Hackcraft for building a meaningful tech solution.

🥈 2nd Place at Code Sangam, where we explored Blockchain and Cybersecurity.

Participation in prestigious hackathons like Code4Cause and Code4Cause 2.0.
              </motion.p>
              <motion.p variants={itemVariants} className="text-foreground/80 mb-8">
              My technical toolbox includes Python, Data Structures & Algorithms, and frontend web development with HTML, CSS, and JavaScript. I&apos;ve also gained hands-on experience in business intelligence tools through virtual internships and simulations with PwC, Tata, Accenture, KPMG, and British Airways.

What drives me is more than just writing code — it’s about solving real problems, making a positive impact, and growing with every challenge. I believe in leading with purpose, building with passion, and always staying curious.

Let’s connect, collaborate, and innovate together. 🚀
              </motion.p>

              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold mb-4">My Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <motion.div variants={itemVariants}>
              <Card className="bg-background/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Education</h3>
                  <p className="text-foreground/80">
                    Bachelor&apos;s Degree in Artificial Intelligence and Data Science  Specialization in Computer Science Engineering 
                    <br />
                    Gurugram University, 2023-2027
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-background/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Experience</h3>
                  <p className="text-foreground/80">
                  Even as a fresher, I’ve built a strong foundation through hands-on projects, hackathons, and leadership roles that reflect my skills, passion, and commitment to growth.

🔧 Project-Based Experience
Developed multiple full-stack web applications using HTML, CSS, JavaScript, and Python. Focused on clean UI/UX and functional, scalable solutions.

Built real-time applications such as a Mental Health Chatbot, Organ Donation Portal, and a DDoS Protection System using Python, AI/ML, and Apache.

Led and contributed to innovative solutions during hackathons, solving real-world challenges related to sustainability, cybersecurity, and healthcare.

Created interactive dashboards and reports using Power BI through virtual internships with PwC, Tata, KPMG, and British Airways.

🏆 Hackathon Experience
🥇 1st Place – Hackcraft for an impactful project built under pressure with strong collaboration.

🥈 2nd Place – Code Sangam, exploring Blockchain and Cybersecurity integration.

Participated in Code4Cause and other national-level tech events, expanding my problem-solving and teamwork skills.

👨‍💼 Leadership Roles
Student Placement Coordinator, GITM – Connecting peers to opportunities and driving placement initiatives.

President, Social Insights Club – Leading community-driven, tech-powered social projects.

CS Tech Manager, Team Sankalp – Managing and mentoring project teams to deliver quality solutions.

Joint Secretary, Capture Crew – Organizing and capturing campus life through digital creativity.


                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-background/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Interests</h3>
                  <p className="text-foreground/80">
                    UI/UX Design, Open Source, Artificial Intelligence, Mobile App Development, and Continuous Learning.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
