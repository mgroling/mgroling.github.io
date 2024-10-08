const courses = [
  // KTH
  {
    title: '',
    number: '',
    link: '',
    university: '',
  },
  {
    title: 'Individual Project in Theoretical Computer Science',
    number: 'DD2467',
    link: 'https://www.kth.se/student/kurser/kurs/DD2467?l=en',
    university: 'KTH',
  },
  {
    title: 'Scalable Software Development with Functional Programming',
    number: 'DD2489',
    link: 'https://www.kth.se/student/kurser/kurs/DD2489?l=en',
    university: 'KTH',
  },
  {
    title: 'Parallel and Distributed Computing',
    number: 'DD2443',
    link: 'https://www.kth.se/student/kurser/kurs/DD2443?l=en',
    university: 'KTH',
  },
  {
    title: 'Formal Methods',
    number: 'DD2452',
    link: 'https://www.kth.se/student/kurser/kurs/DD2452?l=en',
    university: 'KTH',
  },
  {
    title: 'Swedish A2 for Engineers',
    number: 'LS1512',
    link: 'https://www.kth.se/student/kurser/kurs/LS1512?l=en',
    university: 'KTH',
  },
  {
    title: 'Automata and Languages',
    number: 'DD2373',
    link: 'https://www.kth.se/student/kurser/kurs/DD2373?l=en',
    university: 'KTH',
  },
  {
    title: 'Game Theory',
    number: 'SF2972',
    link: 'https://www.kth.se/student/kurser/kurs/SF2972?l=en',
    university: 'KTH',
  },
  {
    title: 'Problem Solving and Programming under Pressure',
    number: 'DD2458',
    link: 'https://www.kth.se/student/kurser/kurs/DD2458?l=en',
    university: 'KTH',
  },
  {
    title: 'Computer Security',
    number: 'DD2395',
    link: 'https://www.kth.se/student/kurser/kurs/DD2395?l=en',
    university: 'KTH',
  },
  {
    title: 'Protocols and Principles of the Internet',
    number: 'IK2218',
    link: 'https://www.kth.se/student/kurser/kurs/IK2218?l=en',
    university: 'KTH',
  },
  {
    title: 'Advanced Algorithms',
    number: 'DD2440',
    link: 'https://www.kth.se/student/kurser/kurs/DD2440?l=en',
    university: 'KTH',
  },
  {
    title: 'Artificial Intelligence',
    number: 'DD2380',
    link: 'https://www.kth.se/student/kurser/kurs/DD2380?l=en',
    university: 'KTH',
  },
  {
    title: 'Introduction to the Philosophy of Science and Research Methodology for Computer Scientists',
    number: 'DA2210',
    link: 'https://www.kth.se/student/kurser/kurs/DA2210?l=en',
    university: 'KTH',
  },
  // NTNU
  {
    title: 'Computer Graphics I',
    number: 'IE500217',
    link: 'https://www.ntnu.edu/studies/courses/IE500217/2021#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Data Processing and Visualization ',
    number: 'IE500417',
    link: 'https://www.ntnu.edu/studies/courses/IE500417/2021#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Introduction to applied Simulation and Visualisation ',
    number: 'IE502214',
    link: 'https://www.ntnu.edu/studies/courses/IE502214/2021#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Modelling and Simulation of Dynamic Systems ',
    number: 'IP500515',
    link: 'https://www.ntnu.edu/studies/courses/IP500515/2021#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Simulation of Cyber-Physical Systems',
    number: 'IE500720',
    link: 'https://www.ntnu.edu/studies/courses/IE500720/2021#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Computer Graphics II',
    number: 'IE501914',
    link: 'https://www.ntnu.edu/studies/courses/IE501914/2021#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Artificial Intelligence ',
    number: 'IE502014',
    link: 'https://www.ntnu.edu/studies/courses/IE502014/2021#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Experts in Teamwork - Oceanic Recreation',
    number: 'IE509118',
    link: 'https://www.ntnu.edu/studies/courses/IE509118/2021#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Swarm Intelligence',
    number: 'IE501714',
    link: 'https://www.ntnu.edu/studies/courses/IE501714/2022#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Specialisation Project',
    number: 'IE505718',
    link: 'https://www.ntnu.edu/studies/courses/IE505718/2022#tab=omEmnet',
    university: 'NTNU',
  },
  {
    title: 'Specialisation Course ',
    number: 'IE505818',
    link: 'https://www.ntnu.edu/studies/courses/IE505818/2022#tab=omEmnet',
    university: 'NTNU',
  },
  // FU
  {
    title: 'Functional Programming',
    number: '19300001',
    link: 'https://archiv.vv.fu-berlin.de/ws1718/en/lv/0086d_k150/393215/224491/',
    university: 'FU',
  },
  {
    title: 'Logics and Discrete Mathematics',
    number: '19300901',
    link: 'https://archiv.vv.fu-berlin.de/ws1718/de/lv/0086d_k150/393224/224581/',
    university: 'FU',
  },
  {
    title: 'Computer Architecture',
    number: '19300601',
    link: 'https://archiv.vv.fu-berlin.de/ws1718/en/lv/0086d_k150/393523/224534/',
    university: 'FU',
  },
  {
    title: 'Object oriented Programming',
    number: '19300101',
    link: 'https://archiv.vv.fu-berlin.de/ss18/en/lv/0086c_k150/423085/224499/',
    university: 'FU',
  },
  {
    title: 'Foundations of Theoretical Computer Science',
    number: '19301201',
    link: 'https://archiv.vv.fu-berlin.de/ss18/en/lv/0086c_k150/423028/224572/',
    university: 'FU',
  },
  {
    title: 'Linear Algebra for Computer Science',
    number: '19301001',
    link: 'https://archiv.vv.fu-berlin.de/ss18/en/lv/0086c_k150/423235/224589/',
    university: 'FU',
  },
  {
    title: 'Operating and Communication Systems',
    number: '19300701',
    link: 'https://archiv.vv.fu-berlin.de/ss18/en/lv/0086c_k150/423087/224534/',
    university: 'FU',
  },
  {
    title: 'Algorithms, Data Structures, and Data Abstraction',
    number: '19300201',
    link: 'https://archiv.vv.fu-berlin.de/ws1819/en/lv/0086c_k150/424576/224517/',
    university: 'FU',
  },
  {
    title: 'Consequences of Computer Science',
    number: '19301301',
    link: 'https://archiv.vv.fu-berlin.de/ws1819/en/lv/0086c_k150/424609/224547/',
    university: 'FU',
  },
  {
    title: 'Calculus for Computer Science',
    number: '19301101 ',
    link: 'https://archiv.vv.fu-berlin.de/ws1819/en/lv/0086c_k150/424586/224597/',
    university: 'FU',
  },
  {
    title: 'Concurrent and Distributed Programming',
    number: '19322101',
    link: 'https://archiv.vv.fu-berlin.de/ss19/en/lv/0086c_k150/497273/224525/',
    university: 'FU',
  },
  {
    title: 'Database Systems',
    number: '19301501',
    link: 'https://archiv.vv.fu-berlin.de/ss19/en/lv/0086c_k150/497011/224555/',
    university: 'FU',
  },
  {
    title: 'Software Engineering',
    number: '19301401',
    link: 'https://archiv.vv.fu-berlin.de/ss19/en/lv/0086c_k150/497013/224563/',
    university: 'FU',
  },
  {
    title: 'Scientific Research in Computer Science',
    number: '19301710',
    link: 'https://archiv.vv.fu-berlin.de/ss19/en/lv/0086c_k150/518386/224606/',
    university: 'FU',
  },
  {
    title: 'Pattern recognition/Machine Learning',
    number: ' 19304201',
    link: 'https://archiv.vv.fu-berlin.de/ss19/en/lv/0086c_k150/518387/224729/',
    university: 'FU',
  },
  {
    title: 'Linear Algebra II',
    number: '19211701',
    link: 'https://archiv.vv.fu-berlin.de/ws1920/en/lv/0084c_k120/537960/157480/',
    university: 'FU',
  },
  {
    title: 'Neurobiology',
    number: '23772a',
    link: 'https://archiv.vv.fu-berlin.de/ws1920/en/lv/0260c_k150/503948/189909/',
    university: 'FU',
  },
  {
    title: 'Software Project',
    number: '19329012',
    link: 'https://archiv.vv.fu-berlin.de/ss20/en/lv/0086c_k150/597165/224801/',
    university: 'FU',
  },
  {
    title: 'Advanced Algorithms',
    number: '19303501',
    link: 'https://archiv.vv.fu-berlin.de/ws2021/en/lv/0086c_k150/632355/224848/',
    university: 'FU',
  },
  // TU
  {
    title: 'Stochastics for Computer Science',
    number: '0230 L 018',
    link: 'https://moseskonto.tu-berlin.de/moses/modultransfersystem/bolognamodule/beschreibung/anzeigen.html;jsessionid=eAZLL22X6sa31uZki03ZYi8t8cATu612KMKuJg9X.moseskonto?number=20217&version=5&sprache=1',
    university: 'TU',
  },
];

export default courses;
