"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Lead the frontend development team in creating responsive and accessible web applications. Implemented modern UI/UX designs and optimized performance.",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Digital Innovations",
    period: "2019 - 2021",
    description:
      "Developed and maintained client websites using React and Node.js. Collaborated with designers to implement responsive designs and interactive features.",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Hub",
    period: "2018 - 2019",
    description:
      "Assisted in the development of web applications. Gained experience in frontend technologies and agile development methodologies.",
  },
]

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    period: "2014 - 2018",
    description:
      "Focused on software development, algorithms, and data structures. Participated in coding competitions and hackathons.",
  },
  {
    id: 2,
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    period: "2018",
    description:
      "Intensive 12-week program covering full-stack web development with modern technologies and frameworks.",
  },
]

export default function Resume() {
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
    <section id="resume" ref={ref} className="py-20 bg-background/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/20 to-transparent" />
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
              My <span className="text-primary">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-foreground/80 max-w-2xl mx-auto">
              A summary of my professional experience, education, and skills. Download my full resume for more details.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={containerVariants}>
              <div className="flex items-center mb-8">
                <Briefcase className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp) => (
                  <motion.div key={exp.id} variants={itemVariants}>
                    <Card className="border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold">{exp.role}</h4>
                          <span className="text-primary text-sm font-medium px-2 py-1 bg-primary/10 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <h5 className="text-foreground/70 mb-3">{exp.company}</h5>
                        <p className="text-foreground/80">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants}>
              <div className="flex items-center mb-8">
                <GraduationCap className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <motion.div key={edu.id} variants={itemVariants}>
                    <Card className="border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold">{edu.degree}</h4>
                          <span className="text-primary text-sm font-medium px-2 py-1 bg-primary/10 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                        <h5 className="text-foreground/70 mb-3">{edu.institution}</h5>
                        <p className="text-foreground/80">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/resume.pdf" download>
                <Download size={20} className="mr-2" />
                Download Full Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
