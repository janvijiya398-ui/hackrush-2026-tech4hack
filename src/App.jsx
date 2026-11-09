import { useState } from 'react'
import {
  LayoutDashboard, CalendarDays, BrainCircuit, Users,
  ChartNoAxesCombined, Trophy, Megaphone, Settings,
  Search, Bell, ArrowUpRight, Clock3, Zap, ChevronRight,
  Menu, X, Sparkles, Target, Award, Rocket,FileText,Pin
} from 'lucide-react'
import './App.css'

const navigation = [
  { name: 'Overview', icon: LayoutDashboard },
  { name: 'Event Timeline', icon: CalendarDays },
  { name: 'Innovation Tracks', icon: BrainCircuit },
  { name: 'Team Hub', icon: Users },
  { name: 'Analytics', icon: ChartNoAxesCombined },
  { name: 'Leaderboard', icon: Trophy },
  { name: 'Announcements', icon: Megaphone },
]

const tracks = [
  {
    number: '01',
    name: 'AI, ML & Generative AI',
    description: 'Build intelligent solutions using artificial intelligence and machine learning.',
    icon: '✳',
    color: 'purple',
  },
  {
    number: '02',
    name: 'Fintech & Blockchain',
    description: 'Reimagine finance with secure, transparent digital technologies.',
    icon: '◈',
    color: 'blue',
  },
  {
    number: '03',
    name: 'HealthTech & Biotech',
    description: 'Create technology that advances healthcare and biotechnology.',
    icon: '✚',
    color: 'green',
  },
  {
    number: '04',
    name: 'Cybersecurity & Digital Safety',
    description: 'Design solutions that protect people and digital ecosystems.',
    icon: '⬡',
    color: 'orange',
  },
  {
    number: '05',
    name: 'Smart Cities & Sustainability',
    description: 'Build smarter, greener and more sustainable communities.',
    icon: '⌂',
    color: 'cyan',
  },
]

const milestones = [
  { date: '09 NOV', title: 'Event Announcement', detail: 'HackRush 2026 officially announced', status: 'current' },
  { date: '09 NOV', title: 'Submissions Begin', detail: 'Idea and PPT submission portal opens', status: 'current' },
  { date: '16 NOV', title: 'Submission Deadline', detail: 'Last date to submit ideas and presentations', status: 'upcoming' },
  { date: '18 NOV', title: 'Top 80 Teams', detail: 'Shortlisted teams announced', status: 'upcoming' },
  { date: '19–20 NOV', title: 'Mentorship Round', detail: 'Guidance and mentorship for selected teams', status: 'upcoming' },
  { date: '21 NOV', title: 'Top 30 Teams', detail: 'Finalist teams announced', status: 'upcoming' },
  { date: '22 NOV', title: 'Grand Finale', detail: 'Online final round', status: 'upcoming' },
  { date: '25 NOV', title: 'Results', detail: 'Final results declared', status: 'upcoming' },
]
const sampleTeams = [
  {
    id: 'HR-001',
    name: 'Innovators X',
    track: 'AI, ML & Generative AI',
    members: 4,
    lead: 'Team Lead',
    status: 'PPT Pending',
    progress: 65,
  },
  {
    id: 'HR-002',
    name: 'Green Bytes',
    track: 'Smart Cities & Sustainability',
    members: 3,
    lead: 'Team Lead',
    status: 'Submitted',
    progress: 100,
  },
  {
    id: 'HR-003',
    name: 'FinTech Minds',
    track: 'Fintech & Blockchain',
    members: 5,
    lead: 'Team Lead',
    status: 'In Progress',
    progress: 40,
  },
]
const analyticsTracks = [
  { name: 'AI, ML & Generative AI', count: 28, color: '#16834D' },
  { name: 'Fintech & Blockchain', count: 18, color: '#4B8F70' },
  { name: 'HealthTech & Biotech', count: 22, color: '#78A98A' },
  { name: 'Cybersecurity & Digital Safety', count: 14, color: '#A0BEA8' },
  { name: 'Smart Cities & Sustainability', count: 18, color: '#C0D5C4' },
]

const submissionStats = [
  { label: 'Submitted', count: 72, color: '#16834D' },
  { label: 'In progress', count: 18, color: '#D6A34A' },
  { label: 'Not started', count: 10, color: '#CBD5CE' },
]

const leaderboardTeams = [
  { rank: 1, name: 'CodeCatalysts', track: 'AI, ML & Generative AI', score: 94, status: 'Top Performer' },
  { rank: 2, name: 'Eco Innovators', track: 'Smart Cities & Sustainability', score: 91, status: 'Excellent' },
  { rank: 3, name: 'FinVision', track: 'Fintech & Blockchain', score: 88, status: 'Excellent' },
  { rank: 4, name: 'HealthBridge', track: 'HealthTech & Biotech', score: 84, status: 'Shortlisted' },
  { rank: 5, name: 'CyberShield', track: 'Cybersecurity & Digital Safety', score: 81, status: 'Shortlisted' },
]
const announcements = [
  {
    id: 1,
    title: 'HackRush 2026 registrations are now open!',
    message: 'Teams can now register for HackRush 2026. Explore the innovation tracks and start building your ideas.',
    category: 'General',
    priority: 'High',
    date: '09 Nov 2026',
    pinned: true,
  },
  {
    id: 2,
    title: 'Final submission deadline announced',
    message: 'All participating teams must submit their project presentations before the announced deadline.',
    category: 'Deadline',
    priority: 'High',
    date: '16 Nov 2026',
    pinned: false,
  },
  {
    id: 3,
    title: 'Top 80 teams announcement',
    message: 'The shortlisted teams will be announced following the initial evaluation round.',
    category: 'Results',
    priority: 'Medium',
    date: '18 Nov 2026',
    pinned: false,
  },
  {
    id: 4,
    title: 'Mentorship sessions',
    message: 'Shortlisted teams will get an opportunity to interact with mentors and refine their solutions.',
    category: 'Mentorship',
    priority: 'Medium',
    date: '19–20 Nov 2026',
    pinned: false,
  },
  {
    id: 5,
    title: 'Grand Finale – HackRush 2026',
    message: 'The final round will bring together the selected teams to present their innovations.',
    category: 'General',
    priority: 'Low',
    date: '22 Nov 2026',
    pinned: false,
  },
]
function App() {
  const [activePage, setActivePage] = useState('Overview')
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [teamSearch, setTeamSearch] = useState('')
const [teamTrackFilter, setTeamTrackFilter] = useState('All Tracks')
const [teamStatusFilter, setTeamStatusFilter] = useState('All Statuses')

  

  
const goTo = (page) => {
  setActivePage(page)
  setMenuOpen(false)
}

// SEARCH FUNCTIONALITY
const query = search.trim().toLowerCase()

const searchResults = query
  ? [
      ...navigation
        .filter(item => item.name.toLowerCase().includes(query))
        .map(item => ({
          title: item.name,
          detail: 'Open dashboard section',
          page: item.name,
        })),

      ...tracks
        .filter(track =>
          `${track.name} ${track.description}`.toLowerCase().includes(query)
        )
        .map(track => ({
          title: track.name,
          detail: 'Innovation track',
          page: 'Innovation Tracks',
        })),

      ...milestones
        .filter(item =>
          `${item.title} ${item.detail} ${item.date}`.toLowerCase().includes(query)
        )
        .map(item => ({
          title: item.title,
          detail: `${item.date} · Event milestone`,
          page: 'Event Timeline',
        })),
    ].slice(0, 7)
  : []


  const pageContent = () => {
   
if (activePage === 'Overview') {
  return (
    <>
      <section className="hero-card">
        <div className="hero-content">
          <span className="eyebrow"><Sparkles size={14} /> THE FLAGSHIP HACKATHON</span>
          <h1>Ideas into impact.<br /><span>Innovation into reality.</span></h1>
          <p>
            Welcome to HackRush 2026, the flagship online hackathon
            by Tech4Hack, IGDTUW. Think boldly. Build fearlessly.
          </p>
          <button className="primary-btn" onClick={() => goTo('Event Timeline')}>
            Explore event journey <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="hero-art">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="core"><Zap size={55} /></div>
          <span className="orbit-dot dot-one"></span>
          <span className="orbit-dot dot-two"></span>
          <span className="orbit-dot dot-three"></span>
          <span className="art-label">HACKRUSH <b>2026</b></span>
        </div>

        <div className="hero-bottom">
          <span><span className="live-dot"></span> EVENT JOURNEY IN PROGRESS</span>
          <span>09 — 25 NOVEMBER 2026</span>
        </div>
      </section>

      <div className="section-heading">
        <div>
          <span className="section-kicker">AT A GLANCE</span>
          <h2>Event Overview</h2>
        </div>
        <span className="muted-label">Event information</span>
      </div>

      <section className="stats-grid">
        <Stat icon={Users} label="Shortlisted teams" value="80" note="Target at selection stage" color="purple" />
        <Stat icon={Trophy} label="Finalist teams" value="30" note="Final selection stage" color="blue" />
        <Stat icon={BrainCircuit} label="Innovation tracks" value="05" note="Areas of innovation" color="green" />
        <Stat icon={Target} label="Team size" value="3–5" note="Members per team" color="orange" />
      </section>

      <div className="content-grid">
        <section className="panel deadline-panel">
          <div className="panel-heading">
            <div>
              <span className="section-kicker">DON'T MISS OUT</span>
              <h3>Next Key Milestone</h3>
            </div>
            <span className="round-icon"><Clock3 size={19} /></span>
          </div>

          <div className="deadline-date">16 <span>NOVEMBER 2026</span></div>
          <h3 className="deadline-title">Idea / PPT Submission Ends</h3>
          <p>Make sure your team's idea and presentation are submitted before the deadline.</p>

          <button className="text-btn" onClick={() => goTo('Event Timeline')}>
            View complete timeline <ChevronRight size={16} />
          </button>
        </section>

        <section className="panel tracks-preview">
          <div className="panel-heading">
            <div>
              <span className="section-kicker">EXPLORE POSSIBILITIES</span>
              <h3>Innovation Tracks</h3>
            </div>
            <button className="icon-btn" onClick={() => goTo('Innovation Tracks')}>
              <ArrowUpRight size={18} />
            </button>
          </div>

          {tracks.slice(0, 5).map(track => (
            <div className="mini-track" key={track.number}>
              <span className={`track-symbol ${track.color}`}>{track.icon}</span>
              <span>{track.name}</span>
              <ChevronRight size={15} className="muted-icon" />
            </div>
          ))}

          <button className="text-btn" onClick={() => goTo('Innovation Tracks')}>
            Discover all five tracks <ChevronRight size={16} />
          </button>
        </section>
      </div>

      <section className="panel journey-panel">
        <div className="panel-heading">
          <div>
            <span className="section-kicker">THE ROAD AHEAD</span>
            <h3>HackRush Journey</h3>
          </div>
          <button className="text-btn" onClick={() => goTo('Event Timeline')}>
            Full timeline <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="journey-line">
          {milestones.map((item, index) => (
            <div className="journey-step" key={index}>
              <span className={`journey-dot ${item.status}`}></span>
              <span className="journey-date">{item.date}</span>
              <b>{item.title}</b>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}


if (activePage === 'Event Timeline') {
  const timelineData = [
    {
      date: '09 NOV',
      stage: 'STAGE 01',
      title: 'Event Announcement',
      description: 'HackRush 2026 is officially announced. Participants can explore the event and understand its innovation tracks.',
      action: 'Explore the event theme and identify a problem area that interests your team.',
      status: 'Current stage',
      tasks: [
        'Read the event information',
        'Explore all five innovation tracks',
        'Start brainstorming possible ideas',
      ],
    },
    {
      date: '09 NOV',
      stage: 'STAGE 02',
      title: 'Submissions Begin',
      description: 'The idea and PPT submission portal opens for participating teams.',
      action: 'Start preparing your project concept and presentation.',
      status: 'Current stage',
      tasks: [
        'Finalise your team idea',
        'Define the problem statement',
        'Start preparing your PPT',
      ],
    },
    {
      date: '16 NOV',
      stage: 'STAGE 03',
      title: 'Submission Deadline',
      description: 'Last date to submit project ideas and presentations.',
      action: 'Complete and review your submission before the deadline.',
      status: 'Upcoming',
      tasks: [
        'Finalise the proposed solution',
        'Explain innovation and feasibility',
        'Proofread and review the PPT',
        'Submit using the provided instructions',
      ],
    },
    {
      date: '18 NOV',
      stage: 'STAGE 04',
      title: 'Top 80 Teams',
      description: 'Shortlisted teams are announced following the initial evaluation.',
      action: 'Keep track of event announcements and prepare for the next stage.',
      status: 'Upcoming',
      tasks: [
        'Monitor organiser announcements',
        'Keep your project details accessible',
        'Prepare to explain your idea',
      ],
    },
    {
      date: '19–20 NOV',
      stage: 'STAGE 05',
      title: 'Mentorship Round',
      description: 'Selected teams get an opportunity to interact with mentors and refine their solutions.',
      action: 'Use mentor feedback to improve your project direction.',
      status: 'Upcoming',
      tasks: [
        'Prepare a short project overview',
        'List technical challenges',
        'Note questions for mentors',
        'Document feedback and improvements',
      ],
    },
    {
      date: '21 NOV',
      stage: 'STAGE 06',
      title: 'Top 30 Teams',
      description: 'The finalist teams for the grand finale are announced.',
      action: 'Prepare for the final presentation if your team is shortlisted.',
      status: 'Upcoming',
      tasks: [
        'Check the finalist announcement',
        'Refine your prototype',
        'Prepare a clear demonstration',
      ],
    },
    {
      date: '22 NOV',
      stage: 'STAGE 07',
      title: 'Grand Finale',
      description: 'The final round takes place online, where selected teams present their innovations.',
      action: 'Present your solution and communicate its value clearly.',
      status: 'Upcoming',
      tasks: [
        'Test your prototype and demo',
        'Prepare your final presentation',
        'Divide speaking roles among teammates',
        'Check your online presentation setup',
      ],
    },
    {
      date: '25 NOV',
      stage: 'STAGE 08',
      title: 'Results',
      description: 'Final results of HackRush 2026 are declared.',
      action: 'Follow the result announcement and event updates.',
      status: 'Upcoming',
      tasks: [
        'Watch for the results announcement',
        'Keep an eye on organiser updates',
      ],
    },
  ]

  const preparationTasks = [
    'Understand the problem you want to solve',
    'Choose the most relevant innovation track',
    'Define your solution and its key features',
    'Identify the technologies required',
    'Prepare a clear and structured PPT',
    'Review your submission before the deadline',
  ]

  const journeyStages = [
    'Announcement',
    'Submissions',
    'Shortlisting',
    'Mentorship',
    'Finalists',
    'Finale',
    'Results',
  ]

  return (
    <div className="timeline-page">
      <div className="timeline-intro">
        <span className="section-eyebrow">NOVEMBER 2026 · EVENT SCHEDULE</span>
        <h2>Your HackRush journey, step by step</h2>
        <p>
          Stay informed about every important stage, prepare ahead
          and keep your team moving towards the grand finale.
        </p>
      </div>

      <div className="timeline-overview-grid">
        <div className="timeline-overview-card">
          <span className="timeline-card-label">KEY MILESTONES</span>
          <strong>08</strong>
          <p>Important stages in the event journey</p>
        </div>

        <div className="timeline-overview-card journey-card">
          <span className="timeline-card-label">THE EVENT JOURNEY</span>
          <h3>From announcement to results</h3>
          <p>Follow each stage of HackRush 2026</p>
          <div className="journey-stage-list">
            {journeyStages.map((stage, index) => (
              <span key={stage}>
                <i>{index + 1}</i>
                {stage}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="timeline-section-heading">
        <div>
          <span className="section-eyebrow">IMPORTANT DATES</span>
          <h2>November 2026</h2>
        </div>
        <span className="timeline-count">8 milestones</span>
      </div>

      <div className="detailed-timeline">
        {timelineData.map((item, index) => (
          <div className="detailed-timeline-item" key={item.stage}>
            <div className="timeline-marker-column">
              <div className={`timeline-marker ${item.status === 'Current stage' ? 'marker-current' : ''}`}>
                {index + 1}
              </div>
              {index !== timelineData.length - 1 && (
                <div className="timeline-connector" />
              )}
            </div>

            <article className="milestone-card">
              <div className="milestone-topline">
                <span className="milestone-date">{item.date}</span>
                <div className="milestone-status">
                  <span>{item.stage}</span>
                  <span className={`status-label ${item.status === 'Current stage' ? 'status-current' : 'status-upcoming'}`}>
                    {item.status}
                  </span>
                </div>
              </div>

              <h3>{item.title}</h3>
              <p className="milestone-description">{item.description}</p>

              <div className="milestone-action">
                <span>WHAT TO DO</span>
                <p>{item.action}</p>
              </div>

              <div className="milestone-checklist">
                <span>PREPARATION CHECKLIST</span>
                <ul>
                  {item.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="timeline-bottom-grid">
        <section className="timeline-deadline-card">
          <span className="section-eyebrow">NEXT MAJOR DEADLINE</span>
          <strong className="deadline-date">16 NOV</strong>
          <h3>Submission Deadline</h3>
          <p>
            Complete your idea and presentation before the
            submission deadline.
          </p>
          <div className="deadline-reminder">
            Keep your PPT ready in advance
          </div>
        </section>

        <section className="timeline-preparation-card">
          <span className="section-eyebrow">TEAM READINESS</span>
          <h3>Submission Preparation</h3>
          <p>Use this checklist to organise your team's work.</p>

          <div className="preparation-list">
            {preparationTasks.map((task, index) => (
              <div className="preparation-item" key={task}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{task}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="grand-finale-banner">
        <div>
          <span className="section-eyebrow">THE FINAL DESTINATION</span>
          <h2>Grand Finale</h2>
          <p>
            The final round will be conducted online. The offline
            award ceremony at IGDTUW will take place on a date
            to be announced.
          </p>
        </div>
        <div className="finale-date-block">
          <strong>22</strong>
          <span>NOVEMBER 2026</span>
        </div>
      </section>

      <div className="timeline-disclaimer">
        <strong>Stay updated</strong>
        <p>
          Dates and stage descriptions are based on the event
          schedule displayed in this workspace. Follow organiser
          announcements for any updates or additional instructions.
        </p>
      </div>
    </div>
  )
}

    

   
if (activePage === 'Innovation Tracks') {
  const trackDetails = {
    'AI, ML & Generative AI': {
      ideas: [
        'AI-powered personal learning assistant',
        'Intelligent resume and career analyser',
        'Real-time misinformation detection system'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Gemini API', 'NLP', 'FastAPI'],
      focusAreas: [
        'Personalised AI assistants',
        'Computer vision and image intelligence',
        'Natural language processing',
        'Responsible and explainable AI',
        'Predictive analytics and automation'
      ],
      roadmap: [
        'Identify a real-world problem',
        'Collect and prepare relevant data',
        'Build and test the AI model',
        'Integrate, evaluate and demonstrate'
      ]
    },

    'Fintech & Blockchain': {
      ideas: [
        'Smart expense tracking platform',
        'Fraud detection using machine learning',
        'Transparent blockchain-based certificate system'
      ],
      technologies: ['Python', 'Solidity', 'Ethereum', 'React', 'Node.js', 'SQL'],
      focusAreas: [
        'Digital payments and security',
        'Financial inclusion',
        'Fraud detection',
        'Decentralised applications',
        'Smart contracts and transparency'
      ],
      roadmap: [
        'Identify a financial use case',
        'Design the transaction workflow',
        'Develop and test the solution',
        'Evaluate security and usability'
      ]
    },

    'HealthTech & Biotech': {
      ideas: [
        'AI-assisted health information platform',
        'Medicine reminder and tracking application',
        'Smart hospital resource management system'
      ],
      technologies: ['Python', 'Machine Learning', 'React', 'FastAPI', 'IoT', 'SQL'],
      focusAreas: [
        'Digital health accessibility',
        'Healthcare data management',
        'Medical workflow automation',
        'Remote patient monitoring',
        'Biotechnology innovation'
      ],
      roadmap: [
        'Understand the healthcare challenge',
        'Identify users and requirements',
        'Build a responsible prototype',
        'Test usability and reliability'
      ]
    },

    'Cybersecurity & Digital Safety': {
      ideas: [
        'Phishing website awareness detector',
        'Privacy risk assessment dashboard',
        'Suspicious message classification tool'
      ],
      technologies: ['Python', 'Machine Learning', 'JavaScript', 'React', 'Networking', 'SQL'],
      focusAreas: [
        'Online privacy and data protection',
        'Phishing awareness',
        'Secure authentication',
        'Threat detection and prevention',
        'Digital safety education'
      ],
      roadmap: [
        'Define the security problem',
        'Study relevant risks and requirements',
        'Build a safe detection prototype',
        'Evaluate accuracy and usability'
      ]
    },

    'Smart Cities & Sustainability': {
      ideas: [
        'Smart waste management platform',
        'Community-level energy monitoring',
        'Urban traffic and pollution insights dashboard'
      ],
      technologies: ['Python', 'IoT', 'React', 'Node.js', 'Data Analytics', 'Cloud'],
      focusAreas: [
        'Clean energy and efficiency',
        'Waste management',
        'Smart transportation',
        'Water conservation',
        'Environmental monitoring'
      ],
      roadmap: [
        'Identify a local sustainability issue',
        'Map the data and resources needed',
        'Build a monitoring or analysis prototype',
        'Measure potential environmental impact'
      ]
    }
  }

  if (selectedTrack) {
    const details = trackDetails[selectedTrack.name]

    return (
      <section className="track-detail-page">
        <button
          className="track-back-button"
          onClick={() => setSelectedTrack(null)}
        >
          ← Back to all tracks
        </button>

        <div className="track-detail-hero">
          <div className={`track-symbol large ${selectedTrack.color}`}>
            {selectedTrack.icon}
          </div>
          <span className="track-number">TRACK {selectedTrack.number}</span>
          <h2>{selectedTrack.name}</h2>
          <p>{selectedTrack.description}</p>
        </div>

        <div className="track-detail-grid">
          <section className="panel track-detail-card">
            <span className="section-kicker">GET INSPIRED</span>
            <h3>Example Project Ideas</h3>
            <ul>
              {details.ideas.map((idea, index) => (
                <li key={index}>{idea}</li>
              ))}
            </ul>
          </section>

          <section className="panel track-detail-card">
            <span className="section-kicker">BUILD YOUR SOLUTION</span>
            <h3>Relevant Technologies</h3>
            <div className="technology-tags">
              {details.technologies.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
        </div>

        <section className="panel track-extra-section">
          <span className="section-kicker">EXPLORE THE DOMAIN</span>
          <h3>Key Innovation Areas</h3>
          <p className="panel-description">
            Discover the important problem spaces and opportunities within this track.
          </p>
          <div className="focus-area-grid">
            {details.focusAreas.map((area, index) => (
              <div className="focus-area-item" key={area}>
                <span>0{index + 1}</span>
                <b>{area}</b>
              </div>
            ))}
          </div>
        </section>

        <section className="panel track-extra-section">
          <span className="section-kicker">FROM IDEA TO PROTOTYPE</span>
          <h3>Suggested Development Journey</h3>
          <p className="panel-description">
            A simple approach to help teams turn an initial idea into a working prototype.
          </p>
          <div className="track-roadmap">
            {details.roadmap.map((step, index) => (
              <div className="roadmap-step" key={step}>
                <span>0{index + 1}</span>
                <b>{step}</b>
                {index < details.roadmap.length - 1 && (
                  <ChevronRight size={17} />
                )}
              </div>
            ))}
          </div>
        </section>

        <p className="track-detail-note">
          These are illustrative ideas, focus areas and technology suggestions,
          not official judging criteria. Teams are encouraged to explore original solutions.
        </p>
      </section>
    )
  }

  return (
    <>
      <div className="section-heading">
        <div>
          <span className="section-kicker">FIVE DOMAINS. INFINITE IDEAS.</span>
          <h2>Explore Innovation Tracks</h2>
        </div>
      </div>

      <div className="track-grid">
        {tracks.map(track => (
          <article className="track-card" key={track.number}>
            <div className={`track-symbol large ${track.color}`}>
              {track.icon}
            </div>
            <span className="track-number">TRACK {track.number}</span>
            <h3>{track.name}</h3>
            <p>{track.description}</p>

            <button
              className="track-explore-button"
              onClick={() => setSelectedTrack(track)}
            >
              EXPLORE THIS DOMAIN <ArrowUpRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </>
  )
}

if (activePage === 'Team Hub') {
  const filteredTeams = sampleTeams.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(teamSearch.toLowerCase()) ||
      team.id.toLowerCase().includes(teamSearch.toLowerCase()) ||
      team.track.toLowerCase().includes(teamSearch.toLowerCase())

    const matchesTrack =
      teamTrackFilter === 'All Tracks' ||
      team.track === teamTrackFilter

    const matchesStatus =
      teamStatusFilter === 'All Statuses' ||
      team.status === teamStatusFilter

    return matchesSearch && matchesTrack && matchesStatus
  })

  const trackSummary = tracks.map((track) => ({
    name: track.name,
    count: sampleTeams.filter((team) => team.track === track.name).length,
  }))

  const statusSummary = [
    { label: 'Submitted', count: sampleTeams.filter((team) => team.status === 'Submitted').length },
    { label: 'In Progress', count: sampleTeams.filter((team) => team.status === 'In Progress').length },
    { label: 'PPT Pending', count: sampleTeams.filter((team) => team.status === 'PPT Pending').length },
  ]

  return (
    <div className="team-hub-page">

      <div className="team-hub-intro">
        <div>
          <span className="section-eyebrow">TEAM MANAGEMENT</span>
          <h2>Team Hub</h2>
          <p>
            Manage registrations, explore participating teams and
            monitor submission progress from one workspace.
          </p>
        </div>
        <span className="demo-label">SAMPLE DASHBOARD DATA</span>
      </div>

      {/* OVERVIEW STATS */}
      <div className="team-stats-grid">
        <div className="team-stat-card">
          <span>REGISTERED TEAMS</span>
          <strong>{sampleTeams.length.toString().padStart(2, '0')}</strong>
          <small>Sample team records</small>
        </div>

        <div className="team-stat-card">
          <span>TEAM MEMBERS</span>
          <strong>
            {sampleTeams.reduce((sum, team) => sum + team.members, 0)}
          </strong>
          <small>Across sample teams</small>
        </div>

        <div className="team-stat-card">
          <span>SUBMISSIONS RECEIVED</span>
          <strong>
            {sampleTeams.filter((team) => team.status === 'Submitted').length.toString().padStart(2, '0')}
          </strong>
          <small>Completed submissions</small>
        </div>

        <div className="team-stat-card">
          <span>PENDING SUBMISSIONS</span>
          <strong>
            {sampleTeams.filter((team) => team.status !== 'Submitted').length.toString().padStart(2, '0')}
          </strong>
          <small>In progress or pending</small>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="team-hub-main-grid">

        <section className="team-directory-section">
          <div className="team-section-heading">
            <div>
              <span className="section-eyebrow">PARTICIPANT DIRECTORY</span>
              <h2>Registered Teams</h2>
              <p>Search and filter the participating team records.</p>
            </div>
            <span className="demo-label">DEMO DATA</span>
          </div>

          {/* SEARCH AND FILTERS */}
          <div className="team-filter-bar">
            <input
              type="text"
              placeholder="Search team name, ID or track..."
              value={teamSearch}
              onChange={(e) => setTeamSearch(e.target.value)}
              className="team-search-input"
            />

            <select
              value={teamTrackFilter}
              onChange={(e) => setTeamTrackFilter(e.target.value)}
              className="team-filter-select"
            >
              <option>All Tracks</option>
              {tracks.map((track) => (
                <option key={track.name} value={track.name}>
                  {track.name}
                </option>
              ))}
            </select>

            <select
              value={teamStatusFilter}
              onChange={(e) => setTeamStatusFilter(e.target.value)}
              className="team-filter-select"
            >
              <option>All Statuses</option>
              <option>Submitted</option>
              <option>In Progress</option>
              <option>PPT Pending</option>
            </select>

            <button
              className="team-reset-button"
              onClick={() => {
                setTeamSearch('')
                setTeamTrackFilter('All Tracks')
                setTeamStatusFilter('All Statuses')
              }}
            >
              Reset
            </button>
          </div>

          <div className="team-results-label">
            Showing <strong>{filteredTeams.length}</strong> of {sampleTeams.length} sample teams
          </div>

          {/* TEAM CARDS */}
          <div className="team-directory-list">
            {filteredTeams.length > 0 ? (
              filteredTeams.map((team) => (
                <article className="team-profile-card" key={team.id}>
                  <div className="team-profile-top">
                    <div className="team-avatar">
                      {team.name.charAt(0)}
                    </div>

                    <div className="team-profile-name">
                      <h3>{team.name}</h3>
                      <span>{team.id} · {team.members} members</span>
                    </div>

                    <span className={`team-status-badge ${
                      team.status === 'Submitted'
                        ? 'team-status-done'
                        : team.status === 'In Progress'
                        ? 'team-status-progress'
                        : 'team-status-pending'
                    }`}>
                      {team.status}
                    </span>
                  </div>

                  <div className="team-track-info">
                    <span>INNOVATION TRACK</span>
                    <strong>{team.track}</strong>
                  </div>

                  <div className="team-progress-heading">
                    <span>Submission progress</span>
                    <strong>{team.progress}%</strong>
                  </div>

                  <div className="team-progress-track">
                    <div
                      className="team-progress-fill"
                      style={{ width: `${team.progress}%` }}
                    />
                  </div>

                  <div className="team-profile-footer">
                    <span>Team lead: {team.lead}</span>
                    <span>{team.progress === 100 ? 'Submission complete' : 'Work in progress'}</span>
                  </div>
                </article>
              ))
            ) : (
              <div className="team-empty-state">
                <h3>No teams found</h3>
                <p>Try changing your search or filters.</p>
                <button
                  onClick={() => {
                    setTeamSearch('')
                    setTeamTrackFilter('All Tracks')
                    setTeamStatusFilter('All Statuses')
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="team-insights-column">

          <section className="team-insight-card">
            <span className="section-eyebrow">TRACK DISTRIBUTION</span>
            <h3>Teams by Innovation Track</h3>
            <p className="team-insight-description">
              See how the sample registrations are distributed.
            </p>

            <div className="track-distribution-list">
              {trackSummary.map((track) => (
                <div className="track-distribution-item" key={track.name}>
                  <div className="track-distribution-heading">
                    <span>{track.name}</span>
                    <strong>{track.count}</strong>
                  </div>
                  <div className="track-distribution-bar">
                    <div
                      style={{
                        width: `${sampleTeams.length ? (track.count / sampleTeams.length) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="team-insight-card">
            <span className="section-eyebrow">SUBMISSION OVERVIEW</span>
            <h3>Submission Status</h3>
            <p className="team-insight-description">
              Current status of the sample team submissions.
            </p>

            <div className="team-status-summary">
              {statusSummary.map((status) => (
                <div className="team-status-summary-item" key={status.label}>
                  <div>
                    <span className={`status-dot ${
                      status.label === 'Submitted'
                        ? 'dot-submitted'
                        : status.label === 'In Progress'
                        ? 'dot-progress'
                        : 'dot-pending'
                    }`} />
                    <span>{status.label}</span>
                  </div>
                  <strong>{status.count.toString().padStart(2, '0')}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="team-activity-card">
            <span className="section-eyebrow">ORGANISER DESK</span>
            <h3>Quick Overview</h3>

            <div className="team-activity-item">
              <span className="activity-number">01</span>
              <div>
                <strong>Team registrations</strong>
                <p>Review team profiles and assigned tracks.</p>
              </div>
            </div>

            <div className="team-activity-item">
              <span className="activity-number">02</span>
              <div>
                <strong>Submission monitoring</strong>
                <p>Identify teams that still need to submit.</p>
              </div>
            </div>

            <div className="team-activity-item">
              <span className="activity-number">03</span>
              <div>
                <strong>Track coverage</strong>
                <p>Review registrations across all five tracks.</p>
              </div>
            </div>
          </section>

        </aside>
      </div>

      <div className="team-demo-disclaimer">
        <strong>Demo workspace</strong>
        <p>
          Team names, member counts and submission progress shown here
          are illustrative sample records. They are not live participant
          registrations or official event statistics.
        </p>
      </div>
    </div>
  )
}

    
    
    if (activePage === 'Analytics') {
      return (
        <>
          <div className="section-heading">
            <div>
              <span className="section-kicker">EVENT PERFORMANCE</span>
              <h2>Analytics Overview</h2>
            </div>
            <span className="muted-label">Illustrative demo data</span>
          </div>

          <section className="stats-grid">
            <Stat icon={Users} label="Total registrations" value="100" note="Sample teams" color="green" />
            <Stat icon={FileText} label="Submissions received" value="72" note="Demo records" color="blue" />
            <Stat icon={Target} label="Submission rate" value="72%" note="Of sample registrations" color="purple" />
            <Stat icon={Trophy} label="Innovation tracks" value="05" note="Available domains" color="orange" />
          </section>

          <div className="analytics-grid">

            <section className="panel analytics-panel">
              <div className="panel-heading">
                <div>
                  <span className="section-kicker">PARTICIPATION INSIGHTS</span>
                  <h3>Track-wise Distribution</h3>
                </div>
                <span className="chart-label">100 teams</span>
              </div>

              <div className="track-analytics">
                {analyticsTracks.map(track => (
                  <div className="analytics-track" key={track.name}>
                    <div className="analytics-track-info">
                      <span>{track.name}</span>
                      <b>{track.count}%</b>
                    </div>
                    <div className="analytics-bar">
                      <div
                        className="analytics-bar-fill"
                        style={{
                          width: `${track.count}%`,
                          background: track.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel analytics-panel">
              <div className="panel-heading">
                <div>
                  <span className="section-kicker">SUBMISSION OVERVIEW</span>
                  <h3>Submission Status</h3>
                </div>
                <span className="chart-label">100 teams</span>
              </div>

              <div className="submission-total">
                <strong>72%</strong>
                <span>Submission completion</span>
              </div>

              <div className="submission-bar">
                {submissionStats.map(item => (
                  <div
                    key={item.label}
                    style={{
                      width: `${item.count}%`,
                      background: item.color
                    }}
                  ></div>
                ))}
              </div>

              <div className="submission-legend">
                {submissionStats.map(item => (
                  <div className="legend-item" key={item.label}>
                    <span>
                      <i style={{ background: item.color }}></i>
                      {item.label}
                    </span>
                    <b>{item.count}%</b>
                  </div>
                ))}
              </div>
            </section>

          </div>
          
<section className="event-intelligence-panel">
  <div className="event-intelligence-heading">
    <div>
      <span className="section-kicker">DATA-DRIVEN OVERVIEW</span>
      <h3>Event Intelligence</h3>
      <p>Key insights derived from the illustrative event figures.</p>
    </div>
    <span className="insight-tag">LIVE INSIGHTS · DEMO</span>
  </div>

  <div className="intelligence-grid">
    <article className="intelligence-card">
      <span className="intelligence-icon">✳</span>
      <strong>28%</strong>
      <h4>Highest participation</h4>
      <p>AI, ML & Generative AI leads the track distribution.</p>
    </article>

    <article className="intelligence-card">
      <span className="intelligence-icon">◷</span>
      <strong>28</strong>
      <h4>Pending submissions</h4>
      <p>18 are in progress and 10 have not started.</p>
    </article>

    <article className="intelligence-card">
      <span className="intelligence-icon">◎</span>
      <strong>80%</strong>
      <h4>Shortlisting ratio</h4>
      <p>80 teams are projected for the first selection stage out of 100 registrations.</p>
    </article>

    <article className="intelligence-card">
      <span className="intelligence-icon">↗</span>
      <strong>37.5%</strong>
      <h4>Finalist conversion</h4>
      <p>30 finalist places out of the 80 shortlisted teams.</p>
    </article>
  </div>

  <div className="intelligence-note">
    <strong>Organiser insight</strong>
    <p>
      The current illustrative figures show 72% submission completion.
      Monitoring the remaining 28 submissions may help organisers
      identify where follow-up communication is needed.
    </p>
  </div>
</section>


          <section className="panel funnel-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">COMPETITION JOURNEY</span>
                <h3>Selection Stage Overview</h3>
              </div>
              <span className="chart-label">Event roadmap</span>
            </div>

            <div className="funnel-list">
              <div className="funnel-step">
                <div className="funnel-number">01</div>
                <div className="funnel-info">
                  <b>Registered Teams</b>
                  <span>Initial participation</span>
                </div>
                <strong>100</strong>
              </div>

              <div className="funnel-connector"></div>

              <div className="funnel-step">
                <div className="funnel-number">02</div>
                <div className="funnel-info">
                  <b>Top 80 Shortlist</b>
                  <span>First selection stage</span>
                </div>
                <strong>80</strong>
              </div>

              <div className="funnel-connector"></div>

              <div className="funnel-step">
                <div className="funnel-number">03</div>
                <div className="funnel-info">
                  <b>Top 30 Finalists</b>
                  <span>Final selection stage</span>
                </div>
                <strong>30</strong>
              </div>

              <div className="funnel-connector"></div>

              <div className="funnel-step final-stage">
                <div className="funnel-number">04</div>
                <div className="funnel-info">
                  <b>Grand Finale</b>
                  <span>Final event round</span>
                </div>
                <strong>22 NOV</strong>
              </div>
            </div>
          </section>
        </>
      )
    }
        if (activePage === 'Leaderboard') {
      return (
        <>
          <div className="section-heading">
            <div>
              <span className="section-kicker">HACKRUSH RANKINGS</span>
              <h2>Leaderboard</h2>
            </div>
            <span className="muted-label">Illustrative demo data</span>
          </div>

          <section className="leaderboard-hero">
            <div>
              <span className="section-kicker">THE COMPETITION ARENA</span>
              <h2>Celebrating the innovators.</h2>
              <p>Explore the sample team rankings for HackRush 2026.</p>
            </div>
            <div className="leaderboard-hero-icon">
              <Trophy size={48} />
            </div>
          </section>

          <div className="podium-grid">
            {leaderboardTeams.slice(0, 3).map(team => (
              <article
                className={`podium-card podium-${team.rank}`}
                key={team.rank}
              >
                <div className="podium-medal">
                  {team.rank === 1 ? '1ST' : team.rank === 2 ? '2ND' : '3RD'}
                </div>
                <div className="podium-trophy">
                  <Award size={25} />
                </div>
                <h3>{team.name}</h3>
                <p>{team.track}</p>
                <strong>{team.score}<small>/100</small></strong>
                <span className="podium-caption">DEMO SCORE</span>
              </article>
            ))}
          </div>

          <section className="panel full-panel leaderboard-table-panel">
            <div className="panel-heading">
              <div>
                <span className="section-kicker">TEAM PERFORMANCE</span>
                <h3>Overall Rankings</h3>
              </div>
              <span className="chart-label">5 sample teams</span>
            </div>

            <div className="leaderboard-table-wrap">
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>RANK</th>
                    <th>TEAM NAME</th>
                    <th>INNOVATION TRACK</th>
                    <th>SCORE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardTeams.map(team => (
                    <tr key={team.rank}>
                      <td>
                        <span className="rank-number">
                          {String(team.rank).padStart(2, '0')}
                        </span>
                      </td>
                      <td className="leaderboard-team-name">{team.name}</td>
                      <td>{team.track}</td>
                      <td>
                        <strong className="leaderboard-score">
                          {team.score}
                        </strong>
                        <span className="score-total"> / 100</span>
                      </td>
                      <td>
                        <span className={`leaderboard-status status-${team.rank <= 2 ? 'excellent' : 'shortlisted'}`}>
                          {team.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="leaderboard-note">
              Rankings and scores shown above are fictional sample data
              for demonstration purposes only.
            </p>
          </section>
        </>
      )
    }
          if (activePage === 'Announcements') {
        return (
          <>
            <div className="section-heading">
              <div>
                <span className="section-kicker">STAY IN THE LOOP</span>
                <h2>Announcements</h2>
              </div>
              <span className="muted-label">Illustrative demo data</span>
            </div>

            <section className="announcement-hero">
              <div>
                <span className="section-kicker">HACKRUSH UPDATES</span>
                <h2>Every update. One place.</h2>
                <p>Stay informed about important dates, results and event updates.</p>
              </div>
              <div className="announcement-hero-icon">
                <Megaphone size={45} />
              </div>
            </section>

            <div className="announcement-stats">
              <div className="announcement-stat">
                <span>Total updates</span>
                <strong>{announcements.length}</strong>
              </div>
              <div className="announcement-stat">
                <span>High priority</span>
                <strong>{announcements.filter(item => item.priority === 'High').length}</strong>
              </div>
              <div className="announcement-stat">
                <span>Pinned updates</span>
                <strong>{announcements.filter(item => item.pinned).length}</strong>
              </div>
            </div>

            <section className="announcement-feed">
              <div className="panel-heading">
                <div>
                  <span className="section-kicker">LATEST UPDATES</span>
                  <h3>Announcement feed</h3>
                </div>
                <span className="chart-label">5 sample updates</span>
              </div>

              {announcements.map(item => (
                <article className="announcement-card" key={item.id}>
                  <div className="announcement-card-top">
                    <div className="announcement-category">
                      <Megaphone size={15} />
                      {item.category}
                    </div>

                    <div className={`announcement-priority priority-${item.priority.toLowerCase()}`}>
                      {item.priority} priority
                    </div>
                  </div>

                  <div className="announcement-content">
                    <div className="announcement-title-row">
                      <h3>{item.title}</h3>
                      {item.pinned && (
                        <span className="pinned-label">
                          <Pin size={13} />
                          PINNED
                        </span>
                      )}
                    </div>

                    <p>{item.message}</p>

                    <div className="announcement-date">
                      <CalendarDays size={14} />
                      {item.date}
                    </div>
                  </div>
                </article>
              ))}

              <p className="announcement-disclaimer">
                All announcements displayed here are fictional sample content
                created for dashboard demonstration purposes.
              </p>
            </section>
          </>
        )
      }
    const descriptions = {
      'Team Hub': ['Your team workspace', 'Explore team information and submission stages. Team records will appear here when official data is available.'],
      'Analytics': ['Event Analytics', 'Visual insights into registrations, track distribution and participation will appear here when event data becomes available.'],
      'Leaderboard': ['Competition Arena', 'Team rankings and judging results will be published here when officially announced.'],
      'Announcements': ['Latest Announcements', 'Stay informed about important HackRush 2026 updates and event notices.'],
    }

    const [heading, description] = descriptions[activePage] || ['Coming soon', 'More information will be available soon.']

    return (
      <section className="panel empty-panel">
        <div className="empty-icon"><Rocket size={32} /></div>
        <span className="section-kicker">HACKRUSH 2026</span>
        <h2>{heading}</h2>
        <p>{description}</p>
        <span className="coming-soon">SECTION IN DEVELOPMENT</span>
      </section>
    )
  }

  function Stat({ icon: Icon, label, value, note, color }) {
    return (
      <article className="stat-card">
        <div className={`stat-icon ${color}`}><Icon size={21} /></div>
        <span className="stat-label">{label}</span>
        <strong>{value}</strong>
        <span className="stat-note">{note}</span>
      </article>
    )
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><Zap size={23} fill="currentColor" /></div>
          <div><b>HACKRUSH</b><span>2026 · TECH4HACK</span></div>
          <button className="mobile-close" onClick={() => setMenuOpen(false)}><X /></button>
        </div>

        <div className="nav-label">WORKSPACE</div>
        <nav>
          {navigation.map(item => {
            const Icon = item.icon
            return (
              <button
                key={item.name}
                className={`nav-item ${activePage === item.name ? 'active' : ''}`}
                onClick={() => goTo(item.name)}
              >
                <Icon size={19} />
                <span>{item.name}</span>
                {activePage === item.name && <span className="active-indicator"></span>}
              </button>
            )
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-callout">
            <Sparkles size={19} />
            <b>Think. Build. Transform.</b>
            <p>Where innovative ideas find their momentum.</p>
          </div>
          <div className="organisation">
            <div className="org-avatar">T4</div>
            <div><b>Tech4Hack</b><span>IGDTUW</span></div>
            <Settings size={17} />
          </div>
        </div>
      </aside>

      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)}></div>}

      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenuOpen(true)}><Menu /></button>
          <div className="breadcrumb">Workspace <ChevronRight size={14} /> <b>{activePage}</b></div>
          <div className="topbar-actions">
            <label className="search-box">
              <Search size={17} />
              <input
                placeholder="Search dashboard..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </label>
            <button className="icon-btn notification" aria-label="Notifications"><Bell size={19} /></button>
            <div className="profile"><span>TH</span><div><b>Tech4Hack</b><small>Organiser view</small></div></div>
          </div>
        </header>

        <div className="page-content">
          <div className="welcome-row">
            <div>
              <span className="section-kicker">MONDAY, 09 NOVEMBER 2026</span>
              <h2>{activePage === 'Overview' ? 'Welcome to the command center' : activePage}</h2>
              <p>Your central space for the HackRush 2026 journey.</p>
            </div>
            <div className="event-chip"><span className="live-dot"></span> HACKRUSH 2026</div>
          </div>
          
{search.trim() && (
  <div className="search-results">
    <div className="search-results-heading">
      <b>Search results</b>
      <button onClick={() => setSearch('')}>Clear</button>
    </div>

    {searchResults.length > 0 ? (
      searchResults.map((result, index) => (
        <button
          className="search-result-item"
          key={`${result.title}-${index}`}
          onClick={() => {
            goTo(result.page)
            setSearch('')
          }}
        >
          <span>
            <b>{result.title}</b>
            <small>{result.detail}</small>
          </span>
          <ChevronRight size={17} />
        </button>
      ))
    ) : (
      <p className="no-search-results">
        No matching results found.
      </p>
    )}
  </div>
)}

          {pageContent()}
          <footer>© 2026 TECH4HACK · IGDTUW <span>BUILT FOR INNOVATION <Zap size={13} /></span></footer>
        </div>
      </main>
    </div>
  )
}

export default App