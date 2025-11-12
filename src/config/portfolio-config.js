// ========================================
// Portfolio Configuration
// ========================================
// Update this file with your personal information

const config = {
    // Personal Information
    personalInfo: {
        name: 'Tharun Kumar N',
        title: 'Computer Science Engineering Student | Full Stack Developer',
        bio: 'Passionate Computer Science Engineering student with expertise in software development, building innovative web applications and mobile apps. Proficient in DSA, multiple programming languages, and modern frameworks.',
        email: 'tharunkumar9113@gmail.com',
        phone: '+91 9113096206',
        location: 'Bengaluru, Karnataka, India',
        socialLinks: {
            github: 'https://github.com/Tharun9113',
            linkedin: 'https://www.linkedin.com/in/tharun-kumar-n-2a7960301',
            twitter: '',
            email: 'mailto:tharunkumar9113@gmail.com'
        },
        profileImage: './src/images/profile.jpg',
        resume: './src/files/resume.pdf'
    },

    // About Section
    about: {
        bio: `I'm a dedicated Computer Science Engineering student currently in my 3rd year (5th semester) at Dayananda Sagar Academy Of Technology And Management, maintaining a CGPA of 9.29. My passion lies in software development, where I've mastered Data Structures & Algorithms, multiple programming languages (C, C++, Java, Python), and modern web technologies including Django, Git/GitHub, and full-stack development.
        
        As a team leader in college projects, I've honed my skills in collaborative development and project management. I've actively participated in numerous hackathons, earning certificates and gaining valuable experience in building innovative solutions under time constraints. My projects span from face recognition systems to security applications, showcasing my ability to work with cutting-edge technologies and solve real-world problems.
        
        I'm constantly learning, building, and pushing the boundaries of what's possible with code. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or leading my team in developing the next big thing.`,
        stats: [
            {
                value: 2,
                label: 'Projects Completed'
            },
            {
                value: 2,
                label: 'Hackathons Attended'
            },
            {
                value: 9.29,
                label: 'Current CGPA'
            }
        ]
    },

    // Skills Section
    skills: [
        {
            name: 'Python',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            level: 'Intermediate'
        },
        {
            name: 'Java',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            level: 'Intermediate'
        },
        {
            name: 'C++',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
            level: 'Intermediate'
        },
        {
            name: 'C',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
            level: 'Intermediate'
        },
        {
            name: 'DSA',
            icon: 'DSA_TEXT_ICON',
            level: 'Intermediate'
        },
        {
            name: 'Django',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
            level: 'Intermediate'
        },
        {
            name: 'SQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            level: 'Intermediate'
        },
        {
            name: 'Git/GitHub',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            level: 'Intermediate'
        },
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            level: 'Intermediate'
        },
        {
            name: 'HTML/CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            level: 'Intermediate'
        },
        {
            name: 'App Development',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
            level: 'Intermediate'
        }
    ],

    // Projects Section
    projects: [
        {
            title: 'Face Recognition Attendance Management System',
            description: 'An innovative attendance management system using facial recognition technology. This system automates the attendance tracking process, eliminating manual entry and reducing errors. Features real-time face detection, user registration, attendance logging, and detailed reporting capabilities.',
            image: './src/images/project1.jpg',
            tags: ['JavaScript', 'Face Recognition', 'Web Development'],
            demo: '',
            github: 'https://github.com/Tharun9113/Face_recognition_attendance_management_system'
        },
        {
            title: 'AuthGuard Pro',
            description: 'A comprehensive authentication and security system designed to protect web applications. Features robust user authentication, secure session management, password encryption, and multi-factor authentication capabilities. Built with modern security best practices to ensure maximum protection.',
            image: './src/images/project2.jpg',
            tags: ['JavaScript', 'Security', 'Authentication'],
            demo: '',
            github: 'https://github.com/Tharun9113/AuthGuard_Pro'
        }
    ],

    // Experience/Timeline Section
    experience: [
        {
            date: '2023 - Present',
            title: 'Team Leader & Project Developer',
            company: 'College Group Projects',
            description: 'Leading multiple college group projects as team leader, coordinating team efforts, managing project timelines, and ensuring successful delivery of software solutions. Developed various web applications and systems using modern technologies while fostering collaborative development.'
        },
        {
            date: '2023 - Present',
            title: 'Hackathon Participant',
            company: 'Various Hackathons',
            description: 'Actively participating in multiple hackathons, working under time constraints to build innovative solutions. Earned certificates for outstanding performance and problem-solving skills. Collaborated with diverse teams to create impactful projects.'
        },
        {
            date: '2023 - Present',
            title: 'Student',
            company: 'Dayananda Sagar Academy Of Technology And Management',
            description: 'Pursuing Bachelor of Engineering in Computer Science and Engineering. Currently in 3rd year (5th semester) with a CGPA of 9.29. Actively learning and implementing software development concepts, data structures, algorithms, and modern web technologies.'
        }
    ],

    // Contact Information
    contact: {
        email: 'tharunkumar9113@gmail.com',
        phone: '+91 9113096206',
        location: 'Bengaluru, Karnataka, India'
    },

    // EmailJS Configuration
    // Get these from https://www.emailjs.com/
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create an email service (Gmail, Outlook, etc.)
    // 3. Create an email template
    // 4. Get your Public Key from Account > API Keys
    emailjs: {
        serviceId: 'service_chnxet4',        // ✅ Your EmailJS Service ID
        templateId: 'template_aaecuj8',      // ✅ Your EmailJS Template ID
        publicKey: 'me4QzuJDZhyRVIvWz'       // ✅ Your EmailJS Public Key
    },

    // Education Section
    education: {
        degree: 'Bachelor of Engineering (B.E.)',
        field: 'Computer Science and Engineering',
        institution: 'Dayananda Sagar Academy Of Technology And Management',
        year: '2023 - Present',
        currentYear: '3rd Year (5th Semester)',
        cgpa: '9.29',
        location: 'Bengaluru, Karnataka, India'
    }
};

// Export configuration
export default config;

