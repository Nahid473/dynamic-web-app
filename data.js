/* =====================================================
   CIVIL ENGINEERING — LEARN / SUBJECT SYSTEM
===================================================== */


/* =====================================================
   SUBJECT DATABASE
===================================================== */

const subjects = [

    {
        icon: "📏",
        name: "Surveying",
        desc: "Chain Survey, Compass Survey, Leveling, Theodolite, Plane Table and modern surveying methods.",

        topics: [

            {
                title: "Chain Surveying",
                text: "Chain surveying is a method of surveying in which only linear measurements are taken in the field. It is suitable for small and fairly level areas. The main instruments include chain, tape, arrows, ranging rods and cross staff."
            },

            {
                title: "Compass Surveying",
                text: "Compass surveying is used to measure the direction or bearing of survey lines. A magnetic compass is commonly used for determining magnetic bearings."
            },

            {
                title: "Leveling",
                text: "Leveling is the process of determining the elevation of points relative to a known datum. It is widely used in road, railway, drainage and building construction."
            },

            {
                title: "Theodolite",
                text: "A theodolite is a precision surveying instrument used for measuring horizontal and vertical angles. It is useful in traversing, setting out and engineering surveys."
            },

            {
                title: "Plane Table Survey",
                text: "Plane table surveying is a graphical method of surveying where field observations and plotting are carried out simultaneously."
            }

        ],

        mcq: [

            {
                q: "Which instrument is mainly used for measuring horizontal and vertical angles?",
                options: ["Chain", "Theodolite", "Level", "Compass"],
                answer: 1
            },

            {
                q: "Leveling is mainly used to determine:",
                options: [
                    "Elevation",
                    "Temperature",
                    "Concrete strength",
                    "Soil color"
                ],
                answer: 0
            },

            {
                q: "Which instrument is commonly used to measure magnetic bearings?",
                options: [
                    "Compass",
                    "Theodolite",
                    "Trowel",
                    "Plumb bob"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "🏢",
        name: "RCC",
        desc: "Reinforced Cement Concrete, beam, slab, column, footing, foundation and structural design.",

        topics: [

            {
                title: "Reinforced Cement Concrete",
                text: "RCC stands for Reinforced Cement Concrete. Concrete is strong in compression but weak in tension, while steel reinforcement provides tensile strength."
            },

            {
                title: "Beam",
                text: "A beam is a structural member primarily designed to resist bending and shear forces. Reinforcement is generally provided to resist tensile stresses."
            },

            {
                title: "Slab",
                text: "A slab is a flat structural element generally used for floors and roofs. It transfers loads to beams, walls or columns."
            },

            {
                title: "Column",
                text: "A column is a vertical structural member that transfers loads from beams and slabs to the foundation."
            },

            {
                title: "Foundation",
                text: "A foundation transfers structural loads safely to the soil. Common types include isolated footing, combined footing, strip footing and raft foundation."
            },

            {
                title: "Slump Test",
                text: "The slump test is used to determine the workability or consistency of fresh concrete. A higher slump generally indicates greater workability."
            }

        ],

        mcq: [

            {
                q: "What does RCC stand for?",
                options: [
                    "Reinforced Cement Concrete",
                    "Rapid Cement Construction",
                    "Road Concrete Construction",
                    "Reinforced Clay Concrete"
                ],
                answer: 0
            },

            {
                q: "Which structural member mainly resists bending?",
                options: [
                    "Beam",
                    "Column",
                    "Foundation",
                    "Wall"
                ],
                answer: 0
            },

            {
                q: "What is the purpose of the slump test?",
                options: [
                    "Determine workability",
                    "Determine steel diameter",
                    "Determine soil classification",
                    "Determine cement color"
                ],
                answer: 0
            },

            {
                q: "A column is generally a:",
                options: [
                    "Horizontal member",
                    "Vertical member",
                    "Circular road",
                    "Water tank"
                ],
                answer: 1
            }

        ]
    },


    {
        icon: "🌍",
        name: "Soil Mechanics",
        desc: "Soil classification, index properties, compaction, consolidation, permeability and bearing capacity.",

        topics: [

            {
                title: "Soil Classification",
                text: "Soils can be classified based on particle size, plasticity and engineering properties. Common soil groups include gravel, sand, silt and clay."
            },

            {
                title: "Bearing Capacity",
                text: "Bearing capacity is the ability of soil to safely support loads transmitted by a foundation without excessive settlement or shear failure."
            },

            {
                title: "Compaction",
                text: "Compaction is the mechanical process of increasing soil density by reducing air voids. It improves strength and reduces settlement."
            },

            {
                title: "Permeability",
                text: "Permeability is the ability of soil to allow water to flow through interconnected voids."
            },

            {
                title: "Consolidation",
                text: "Consolidation is the gradual reduction in volume of saturated soil due to expulsion of water from the voids under sustained loading."
            }

        ],

        mcq: [

            {
                q: "What is soil compaction?",
                options: [
                    "Increasing soil density",
                    "Removing all soil",
                    "Adding cement",
                    "Measuring temperature"
                ],
                answer: 0
            },

            {
                q: "Bearing capacity indicates:",
                options: [
                    "Soil color",
                    "Load carrying ability",
                    "Soil temperature",
                    "Water quality"
                ],
                answer: 1
            },

            {
                q: "Which soil generally has very small particle size?",
                options: [
                    "Gravel",
                    "Sand",
                    "Clay",
                    "Stone"
                ],
                answer: 2
            }

        ]
    },


    {
        icon: "🛣️",
        name: "Highway Engineering",
        desc: "Road materials, pavement, traffic engineering, geometric design and highway construction.",

        topics: [

            {
                title: "Road Materials",
                text: "Important highway materials include aggregates, bitumen, cement, soil and other pavement construction materials."
            },

            {
                title: "Flexible Pavement",
                text: "Flexible pavement generally consists of layers such as subgrade, sub-base, base course and bituminous surface course."
            },

            {
                title: "Rigid Pavement",
                text: "Rigid pavement commonly uses cement concrete slabs to distribute traffic loads to the supporting layers."
            },

            {
                title: "Traffic Engineering",
                text: "Traffic engineering deals with the planning, design, operation and control of traffic systems for safe and efficient movement."
            }

        ],

        mcq: [

            {
                q: "Which material is commonly used as a binder in flexible pavement?",
                options: [
                    "Bitumen",
                    "Timber",
                    "Glass",
                    "Brick"
                ],
                answer: 0
            },

            {
                q: "Rigid pavement is generally made using:",
                options: [
                    "Cement concrete",
                    "Wood",
                    "Clay",
                    "Glass"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "💧",
        name: "Hydraulics",
        desc: "Fluid properties, pressure, flow through pipes, open channels, pumps and hydraulic machines.",

        topics: [

            {
                title: "Fluid Properties",
                text: "Important fluid properties include density, specific weight, viscosity, surface tension and specific gravity."
            },

            {
                title: "Pressure",
                text: "Fluid pressure is the normal force exerted by a fluid per unit area."
            },

            {
                title: "Pipe Flow",
                text: "Pipe flow describes fluid movement through closed conduits. Important concepts include discharge, velocity, head loss and pressure."
            },

            {
                title: "Open Channel Flow",
                text: "Open channel flow occurs when the fluid has a free surface exposed to atmospheric pressure, such as flow in canals and rivers."
            },

            {
                title: "Pumps",
                text: "A pump is a mechanical device used to transfer fluid from one location to another by increasing its hydraulic energy."
            }

        ],

        mcq: [

            {
                q: "What is discharge?",
                options: [
                    "Volume of fluid flowing per unit time",
                    "Weight of pipe",
                    "Length of pipe",
                    "Water temperature"
                ],
                answer: 0
            },

            {
                q: "A pump is used for:",
                options: [
                    "Moving fluid",
                    "Testing concrete",
                    "Measuring angles",
                    "Testing soil"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "📋",
        name: "Estimation",
        desc: "Quantity calculation, BOQ, rate analysis, measurement and construction cost estimation.",

        topics: [

            {
                title: "Quantity Calculation",
                text: "Quantity calculation determines the amount of materials and work required for a construction project."
            },

            {
                title: "BOQ",
                text: "BOQ means Bill of Quantities. It contains descriptions and quantities of construction work items and is commonly used for tendering and cost control."
            },

            {
                title: "Rate Analysis",
                text: "Rate analysis determines the unit cost of a construction item by considering materials, labour, equipment, overhead and other relevant costs."
            },

            {
                title: "Measurement",
                text: "Measurement is the process of determining the quantity of completed or proposed construction work according to standard measurement rules."
            }

        ],

        mcq: [

            {
                q: "What does BOQ stand for?",
                options: [
                    "Bill of Quantities",
                    "Building Order Quality",
                    "Basic Office Quantity",
                    "Building Operation Question"
                ],
                answer: 0
            },

            {
                q: "Rate analysis is used for:",
                options: [
                    "Determining unit cost",
                    "Measuring temperature",
                    "Testing soil",
                    "Drawing maps"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "🏗️",
        name: "Construction",
        desc: "Building construction, foundation, masonry, concrete work, finishing and site management.",

        topics: [

            {
                title: "Building Construction",
                text: "Building construction includes site preparation, foundation, structural work, masonry, roofing, flooring, plastering and finishing."
            },

            {
                title: "Foundation Work",
                text: "Foundation work includes excavation, soil preparation, reinforcement, formwork and concrete placement depending on the foundation type."
            },

            {
                title: "Brick Masonry",
                text: "Brick masonry is construction using bricks bonded together with mortar. Proper bonding and workmanship are important for strength and durability."
            },

            {
                title: "Site Safety",
                text: "Construction site safety includes proper PPE, safe access, equipment safety, excavation protection and good site management."
            }

        ],

        mcq: [

            {
                q: "What is one of the main purposes of a foundation?",
                options: [
                    "Transfer load safely to soil",
                    "Decorate the building",
                    "Paint the wall",
                    "Increase window size"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "🚰",
        name: "Water Supply",
        desc: "Water sources, treatment, purification, storage, distribution and water quality.",

        topics: [

            {
                title: "Water Sources",
                text: "Water supply sources can include surface water such as rivers and lakes and groundwater obtained from wells and aquifers."
            },

            {
                title: "Water Treatment",
                text: "Water treatment removes undesirable physical, chemical and biological impurities so that water becomes suitable for its intended use."
            },

            {
                title: "Water Distribution",
                text: "A water distribution system transports treated water through pipes, reservoirs and other facilities to consumers."
            },

            {
                title: "Water Quality",
                text: "Water quality can be assessed using parameters such as turbidity, pH, dissolved substances and microbiological characteristics."
            }

        ],

        mcq: [

            {
                q: "Why is water treatment necessary?",
                options: [
                    "To remove harmful impurities",
                    "To increase soil density",
                    "To measure angles",
                    "To design roads"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "♻️",
        name: "Environmental",
        desc: "Wastewater, sanitation, pollution, solid waste and environmental protection.",

        topics: [

            {
                title: "Wastewater",
                text: "Wastewater is water whose quality has been affected by domestic, industrial or other human activities."
            },

            {
                title: "Sanitation",
                text: "Sanitation involves the safe management of human waste and maintaining hygienic conditions to protect public health."
            },

            {
                title: "Air Pollution",
                text: "Air pollution occurs when harmful substances are released into the atmosphere at concentrations that can adversely affect people or the environment."
            },

            {
                title: "Solid Waste",
                text: "Solid waste management includes collection, transportation, processing, recycling, treatment and safe disposal of waste."
            }

        ],

        mcq: [

            {
                q: "What is wastewater?",
                options: [
                    "Water affected by human activities",
                    "Pure drinking water",
                    "Distilled water",
                    "Rainwater only"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "🧪",
        name: "Physics",
        desc: "Motion, force, work, energy, electricity, magnetism, waves, heat and light.",

        topics: [

            {
                title: "Motion",
                text: "Motion is the change in position of an object with respect to a reference point over time."
            },

            {
                title: "Force",
                text: "Force is an interaction that can change the motion of an object. The SI unit of force is the Newton."
            },

            {
                title: "Work and Energy",
                text: "Work is done when a force causes displacement. Energy is the capacity to do work."
            },

            {
                title: "Electricity",
                text: "Electricity involves electric charge and its movement. Important quantities include voltage, current, resistance and power."
            }

        ],

        mcq: [

            {
                q: "What is the SI unit of force?",
                options: [
                    "Newton",
                    "Joule",
                    "Watt",
                    "Pascal"
                ],
                answer: 0
            },

            {
                q: "What is the SI unit of power?",
                options: [
                    "Watt",
                    "Newton",
                    "Joule",
                    "Pascal"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "⚗️",
        name: "Chemistry",
        desc: "Atoms, molecules, chemical reactions, acids, bases, salts and periodic table.",

        topics: [

            {
                title: "Atomic Structure",
                text: "An atom consists of a nucleus containing protons and neutrons surrounded by electrons. The number of protons determines the atomic number of an element."
            },

            {
                title: "Acids and Bases",
                text: "Acids and bases are important classes of chemical substances. The pH scale is commonly used to indicate acidity or alkalinity."
            },

            {
                title: "Chemical Reaction",
                text: "A chemical reaction converts reactants into products with different chemical properties."
            },

            {
                title: "Periodic Table",
                text: "The periodic table organizes chemical elements according to their atomic numbers and recurring chemical properties."
            },

            {
                title: "Salts",
                text: "Salts are ionic compounds that can be formed through reactions involving acids and bases."
            }

        ],

        mcq: [

            {
                q: "What determines the atomic number of an element?",
                options: [
                    "Number of protons",
                    "Number of neutrons",
                    "Number of molecules",
                    "Number of compounds"
                ],
                answer: 0
            },

            {
                q: "What does pH indicate?",
                options: [
                    "Acidity or alkalinity",
                    "Density only",
                    "Mass only",
                    "Temperature only"
                ],
                answer: 0
            },

            {
                q: "Which particle has a negative charge?",
                options: [
                    "Proton",
                    "Neutron",
                    "Electron",
                    "Nucleus"
                ],
                answer: 2
            }

        ]
    },


    {
        icon: "🧬",
        name: "Biology",
        desc: "Cells, human body, genetics, plants, animals, microorganisms and ecosystems.",

        topics: [

            {
                title: "Cell",
                text: "The cell is the basic structural and functional unit of living organisms. Cells may be broadly classified as prokaryotic or eukaryotic."
            },

            {
                title: "Human Body",
                text: "The human body contains systems such as the circulatory, respiratory, digestive, nervous and skeletal systems."
            },

            {
                title: "Genetics",
                text: "Genetics is the study of heredity and variation. Genes carry hereditary information."
            },

            {
                title: "Photosynthesis",
                text: "Photosynthesis is the process by which green plants use light energy to produce organic food from carbon dioxide and water."
            }

        ],

        mcq: [

            {
                q: "What is the basic unit of life?",
                options: [
                    "Cell",
                    "Tissue",
                    "Organ",
                    "Bone"
                ],
                answer: 0
            },

            {
                q: "Which process allows green plants to make food?",
                options: [
                    "Respiration",
                    "Photosynthesis",
                    "Digestion",
                    "Transpiration"
                ],
                answer: 1
            }

        ]
    },


    {
        icon: "💻",
        name: "Computer & ICT",
        desc: "Computer fundamentals, hardware, software, networking, programming, databases and cybersecurity.",

        topics: [

            {
                title: "Computer Fundamentals",
                text: "A computer is an electronic device that accepts data, processes it according to instructions and produces information."
            },

            {
                title: "Hardware and Software",
                text: "Hardware refers to physical components such as CPU, RAM and storage. Software consists of programs and instructions."
            },

            {
                title: "Networking",
                text: "Computer networking connects devices so they can communicate and share information and resources."
            },

            {
                title: "Database",
                text: "A database is an organized collection of data that can be stored, managed and retrieved efficiently."
            }

        ],

        mcq: [

            {
                q: "What does CPU stand for?",
                options: [
                    "Central Processing Unit",
                    "Computer Power Unit",
                    "Central Program Utility",
                    "Computer Processing User"
                ],
                answer: 0
            },

            {
                q: "Which one is hardware?",
                options: [
                    "Keyboard",
                    "HTML",
                    "JavaScript",
                    "Operating system"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "🇧🇩",
        name: "Bangladesh Studies",
        desc: "Bangladesh history, geography, culture, constitution, economy and Liberation War.",

        topics: [

            {
                title: "Bangladesh History",
                text: "Study important historical events, political movements and the development of Bangladesh."
            },

            {
                title: "Liberation War",
                text: "The Liberation War of Bangladesh took place in 1971 and led to the independence of Bangladesh."
            },

            {
                title: "Bangladesh Geography",
                text: "Bangladesh is located in South Asia and has a landscape strongly influenced by major river systems."
            },

            {
                title: "Bangladesh Economy",
                text: "Bangladesh's economy includes important sectors such as garments, agriculture, services, remittances and manufacturing."
            }

        ],

        mcq: [

            {
                q: "What is the capital of Bangladesh?",
                options: [
                    "Dhaka",
                    "Khulna",
                    "Rajshahi",
                    "Sylhet"
                ],
                answer: 0
            },

            {
                q: "In which year did Bangladesh become independent?",
                options: [
                    "1947",
                    "1952",
                    "1971",
                    "1990"
                ],
                answer: 2
            }

        ]
    },


    {
        icon: "🌐",
        name: "World Knowledge",
        desc: "World geography, countries, capitals, currencies, organizations and famous discoveries.",

        topics: [

            {
                title: "World Geography",
                text: "World geography covers continents, countries, oceans, mountains, rivers, climate and physical features."
            },

            {
                title: "Countries and Capitals",
                text: "Learn important countries, their capitals and geographical locations."
            },

            {
                title: "International Organizations",
                text: "International organizations facilitate cooperation between countries in areas such as health, peace, development and trade."
            }

        ],

        mcq: [

            {
                q: "How many continents are commonly recognized?",
                options: [
                    "5",
                    "6",
                    "7",
                    "8"
                ],
                answer: 2
            }

        ]
    },


    {
        icon: "🧠",
        name: "Viva Preparation",
        desc: "Important Civil Engineering viva and job interview questions with short answers.",

        topics: [

            {
                title: "Civil Engineering Viva",
                text: "Practice common questions from Surveying, RCC, Soil Mechanics, Hydraulics, Highway Engineering, Construction and other Civil Engineering subjects."
            },

            {
                title: "Job Interview",
                text: "Prepare technical questions, personal questions, project questions, site experience questions and basic engineering questions."
            },

            {
                title: "Quick Viva Practice",
                text: "Practice answering questions clearly and briefly. Focus on definitions, purposes, units, formulas, instruments and practical applications."
            }

        ],

        mcq: [

            {
                q: "What is the purpose of a slump test?",
                options: [
                    "Determine concrete workability",
                    "Determine soil bearing capacity",
                    "Measure road width",
                    "Measure steel length"
                ],
                answer: 0
            },

            {
                q: "What does RCC stand for?",
                options: [
                    "Reinforced Cement Concrete",
                    "Road Cement Construction",
                    "Rapid Cement Construction",
                    "Reinforced Clay Concrete"
                ],
                answer: 0
            }

        ]
    },


    {
        icon: "📚",
        name: "Exam Preparation",
        desc: "Important questions, MCQs, model tests, revision materials and practice exams.",

        topics: [

            {
                title: "MCQ Practice",
                text: "Practice multiple-choice questions to improve knowledge, speed and accuracy."
            },

            {
                title: "Model Test",
                text: "Take model tests that simulate examination conditions and help identify weak areas."
            },

            {
                title: "Revision",
                text: "Revision should focus on important definitions, formulas, concepts, diagrams and frequently asked questions."
            }

        ],

        mcq: [

            {
                q: "What is the main purpose of exam practice?",
                options: [
                    "Improve knowledge and performance",
                    "Build a road",
                    "Measure concrete",
                    "Survey a building"
                ],
                answer: 0
            }

        ]
    }

];


/* =====================================================
   LEARN PAGE
===================================================== */

function renderLearn(){

    let html = `

        <div class="page-title">

            <button
                class="back-btn"
                onclick="renderHome()">

                ‹

            </button>

            📚 Learn

        </div>

        <p style="
            color:#aaa;
            margin-bottom:20px;
            line-height:1.7;
        ">

            Diploma in Civil Engineering এবং
            General subjects-এর গুরুত্বপূর্ণ
            বিষয়গুলো অধ্যয়ন করুন।

        </p>

        <div class="grid">

    `;


    subjects.forEach((s,index)=>{

        html += `

            <div
                class="subject-card"
                onclick="openSubject(${index})"
                style="cursor:pointer">

                <h3 style="font-size:20px">

                    ${s.icon}
                    ${s.name}

                </h3>

                <p style="
                    margin-top:10px;
                    color:#aaa;
                    line-height:1.7;
                ">

                    ${s.desc}

                </p>

                <button
                    class="primary-btn"
                    style="
                        width:100%;
                        margin-top:15px;
                    "
                    onclick="event.stopPropagation();openSubject(${index})">

                    📖 Open Subject

                </button>

            </div>

        `;

    });


    html += `

        </div>

    `;


    document.getElementById("content").innerHTML = html;

}


/* =====================================================
   SUBJECT DETAILS
===================================================== */

function openSubject(index){

    const s = subjects[index];


    let html = `

        <div class="page-title">

            <button
                class="back-btn"
                onclick="renderLearn()">

                ‹

            </button>

            ${s.icon}
            ${s.name}

        </div>


        <div class="subject-card">

            <h3>
                ${s.icon} ${s.name}
            </h3>

            <p style="
                color:#aaa;
                line-height:1.8;
                margin-top:10px;
            ">

                ${s.desc}

            </p>

        </div>


        <div class="section-title"
             style="margin:25px 0 15px">

            📖 Study Topics

        </div>

        <div>

    `;


    s.topics.forEach((topic,topicIndex)=>{

        html += `

            <div
                class="subject-card"
                style="
                    margin-bottom:15px;
                    cursor:pointer;
                "
                onclick="openTopic(${index},${topicIndex})">

                <h3>

                    📘
                    ${topic.title}

                </h3>

                <p style="
                    color:#aaa;
                    margin-top:9px;
                    line-height:1.7;
                ">

                    ${topic.text}

                </p>

                <div style="
                    color:#00ffaa;
                    margin-top:12px;
                    font-weight:bold;
                ">

                    Read Full Topic →

                </div>

            </div>

        `;

    });


    html += `

        </div>


        <div class="subject-card"
             style="margin-top:25px">

            <h3>
                📝 ${s.name} MCQ Exam
            </h3>

            <p style="
                color:#aaa;
                margin-top:10px;
                line-height:1.7;
            ">

                এই subject-এর
                ${s.mcq.length}টি MCQ প্রশ্ন
                দিয়ে আপনার knowledge পরীক্ষা করুন।

            </p>

            <button
                class="primary-btn"
                style="
                    width:100%;
                    margin-top:15px;
                "
                onclick="startSubjectExam(${index})">

                🎯 Start MCQ Exam

            </button>

        </div>

    `;


    document.getElementById("content").innerHTML = html;

}


/* =====================================================
   OPEN TOPIC
===================================================== */

function openTopic(subjectIndex,topicIndex){

    const s = subjects[subjectIndex];

    const topic = s.topics[topicIndex];


    document.getElementById("content").innerHTML = `

        <div class="page-title">

            <button
                class="back-btn"
                onclick="openSubject(${subjectIndex})">

                ‹

            </button>

            📖 ${topic.title}

        </div>


        <div class="subject-card">

            <h2>

                ${s.icon}
                ${topic.title}

            </h2>

            <p style="
                color:#ddd;
                line-height:2;
                margin-top:20px;
                font-size:16px;
            ">

                ${topic.text}

            </p>

        </div>


        <div class="subject-card"
             style="
                 margin-top:18px;
                 border-left:4px solid #00ffaa;
             ">

            <h3>
                💡 Important Note
            </h3>

            <p style="
                color:#aaa;
                line-height:1.8;
                margin-top:10px;
            ">

                এই topic-এর basic concept ভালোভাবে
                বুঝে তারপর MCQ practice করুন।
                Viva-এর জন্য definition এবং
                practical application মনে রাখুন।

            </p>

        </div>


        <button
            class="primary-btn"
            style="
                width:100%;
                margin-top:20px;
            "
            onclick="startSubjectExam(${subjectIndex})">

            📝 Practice MCQ

        </button>

    `;

}


/* =====================================================
   MCQ VARIABLES
===================================================== */

let examSubject = 0;

let examQuestion = 0;

let examScore = 0;

let examAnswers = [];


/* =====================================================
   START MCQ EXAM
===================================================== */

function startSubjectExam(index){

    examSubject = index;

    examQuestion = 0;

    examScore = 0;

    examAnswers = [];

    showExamQuestion();

}


/* =====================================================
   SHOW MCQ
===================================================== */

function showExamQuestion(){

    const s = subjects[examSubject];

    const questions = s.mcq;

    const q = questions[examQuestion];


    let optionsHTML = "";


    q.options.forEach((option,i)=>{

        optionsHTML += `

            <label
                style="
                    display:block;
                    padding:14px;
                    margin-top:10px;
                    background:#111d2d;
                    border:1px solid #26384e;
                    border-radius:12px;
                    cursor:pointer;
                ">

                <input
                    type="radio"
                    name="mcqAnswer"
                    value="${i}"
                    style="margin-right:8px">

                <b>
                    ${String.fromCharCode(65+i)}.
                </b>

                ${option}

            </label>

        `;

    });


    const progress =
        ((examQuestion + 1) /
        questions.length) * 100;


    document.getElementById("content").innerHTML = `

        <div class="page-title">

            <button
                class="back-btn"
                onclick="openSubject(${examSubject})">

                ‹

            </button>

            📝 ${s.name} Exam

        </div>


        <div class="subject-card">

            <b>

                Question
                ${examQuestion + 1}
                / ${questions.length}

            </b>

            <div style="
                height:7px;
                background:#263548;
                border-radius:10px;
                margin-top:12px;
                overflow:hidden;
            ">

                <div style="
                    height:100%;
                    width:${progress}%;
                    background:#00ffaa;
                "></div>

            </div>

        </div>


        <div class="subject-card"
             style="margin-top:15px">

            <p style="
                color:#00ffaa;
                font-weight:bold;
            ">

                QUESTION ${examQuestion + 1}

            </p>


            <h3 style="
                margin-top:12px;
                line-height:1.7;
            ">

                ${q.q}

            </h3>


            <div style="margin-top:20px">

                ${optionsHTML}

            </div>

        </div>


        <button
            class="primary-btn"
            style="
                width:100%;
                margin-top:15px;
            "
            onclick="nextExamQuestion()">

            ${
                examQuestion === questions.length - 1
                ? "🏆 Submit Exam"
                : "Next Question →"
            }

        </button>

    `;

}


/* =====================================================
   NEXT QUESTION
===================================================== */

function nextExamQuestion(){

    const selected =
        document.querySelector(
            'input[name="mcqAnswer"]:checked'
        );


    if(!selected){

        if(typeof toast === "function"){

            toast("Please select an answer");

        }
        else{

            alert("Please select an answer");

        }

        return;

    }


    const answer =
        Number(selected.value);


    examAnswers.push(answer);


    const correct =
        subjects[examSubject]
        .mcq[examQuestion]
        .answer;


    if(answer === correct){

        examScore++;

    }


    if(
        examQuestion <
        subjects[examSubject].mcq.length - 1
    ){

        examQuestion++;

        showExamQuestion();

    }
    else{

        showExamResult();

    }

}


/* =====================================================
   EXAM RESULT
===================================================== */

function showExamResult(){

    const s = subjects[examSubject];

    const total = s.mcq.length;

    const percentage =
        Math.round(
            (examScore / total) * 100
        );


    let message = "";


    if(percentage >= 80){

        message =
        "🏆 Excellent! আপনার preparation খুব ভালো।";

    }
    else if(percentage >= 60){

        message =
        "👏 Good! আরও কিছু practice করলে আরও ভালো হবে।";

    }
    else if(percentage >= 40){

        message =
        "💪 ভালো চেষ্টা। আবার topicগুলো পড়ুন।";

    }
    else{

        message =
        "📚 Don't give up! আবার পড়ুন এবং পরীক্ষা দিন।";

    }


    let reviewHTML = "";


    s.mcq.forEach((q,i)=>{

        const userAnswer =
            examAnswers[i];


        const correct =
            userAnswer === q.answer;


        reviewHTML += `

            <div class="subject-card"
                 style="
                    margin-top:12px;
                    border-left:4px solid
                    ${correct ? "#00ffaa" : "#ff5555"};
                 ">

                <b>
                    Q${i+1}. ${q.q}
                </b>

                <p style="
                    margin-top:10px;
                    color:${correct ? "#00ffaa" : "#ff7777"};
                ">

                    ${
                        correct
                        ? "✓ Correct Answer"
                        : "✗ Wrong Answer"
                    }

                </p>

                <p style="
                    margin-top:7px;
                    color:#aaa;
                ">

                    Correct:
                    <b style="color:#00ffaa">

                        ${q.options[q.answer]}

                    </b>

                </p>

            </div>

        `;

    });


    document.getElementById("content").innerHTML = `

        <div class="page-title">

            🏆 Exam Result

        </div>


        <div class="subject-card"
             style="text-align:center">

            <div style="
                font-size:65px;
                margin-bottom:10px;
            ">

                ${
                    percentage >= 80
                    ? "🏆"
                    : percentage >= 50
                    ? "🎯"
                    : "📚"
                }

            </div>


            <h1 style="
                font-size:50px;
                color:#00ffaa;
            ">

                ${percentage}%

            </h1>


            <h2 style="margin-top:10px">

                ${examScore} / ${total}

            </h2>


            <p style="
                color:#aaa;
                margin-top:15px;
                line-height:1.7;
            ">

                ${message}

            </p>

        </div>


        <h2 style="margin-top:25px">

            📊 Answer Review

        </h2>


        ${reviewHTML}


        <button
            class="primary-btn"
            style="
                width:100%;
                margin-top:20px;
            "
            onclick="startSubjectExam(${examSubject})">

            🔄 Try Again

        </button>


        <button
            class="secondary-btn"
            style="
                width:100%;
                margin-top:10px;
            "
            onclick="openSubject(${examSubject})">

            📖 Back to Subject

        </button>

    `;

}


/* =====================================================
   END
===================================================== */