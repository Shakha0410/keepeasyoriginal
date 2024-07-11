// employees.js
import Image from 'next/image';
import styles from './Employees.module.scss';
import Link from 'next/link';

const employees = [
  {
    id: 1,
    name: 'Komil Karayev',
    position: 'Co-Founder',
    description: 'A driven, innovative leader who has built a thriving logistics company from the ground up. With a keen eye for efficiency and a passion for problem-solving, they have navigated the industry with strategic vision and adaptability, positioning their company as a trusted partner for businesses worldwide.',
    image: '/komil.jpg',
  },
  {
    id: 2,
    name: 'Alisher Isayev',
    position: 'Co-Founder',
    description: 'A visionary entrepreneur who has revolutionized the logistics industry with their forward-thinking approach and commitment to excellence. They have fostered a dynamic, collaborative team that delivers exceptional service, driving the companys rapid growth and solidifying its reputation as an industry leader.',
    image: '/alisher.jpg',
  },
  {
    id: 3,
    name: 'Ulugbek',
    position: 'Car Hauling Manager',
    description: 'High-energy Young Car Hauling Manager with 5+ years of experience. Proven track record in optimizing routes, ensuring timely deliveries, and maintaining vehicle safety. Excellent communication and leadership skills. Adept at resolving customer complaints and boosting team morale.',
    image: '/ulugbek.jpg',
  },
  {
    id: 4,
    name: 'Shakhzod',
    position: 'Dispacther',
    description: 'Efficient Young Car Hauling Dispatcher with 3+ years of experience. Skilled in coordinating driver schedules, monitoring vehicle locations, and addressing real-time logistical challenges. Exceptional multitasking abilities and strong problem-solving skills. Committed to delivering exceptional customer service and maintaining a smooth, streamlined transportation operation.',
    image: '/shakhzod.jpg',
  },
  {
    id: 5,
    name: 'Zafar',
    position: 'Dispacther',
    description: 'Driven Young Car Hauling Logistics Coordinator with 3+ years of industry experience. Excels at optimizing transportation routes, managing inventory, and collaborating with cross-functional teams. Proficient in data analysis and process improvement. Passionate about delivering cost-effective, reliable, and timely vehicle transport solutions.',
    image: '/zafar.jpg',
  },
  {
    id: 6,
    name: 'Jane Doe',
    position: 'Accountant',
    description: 'Meticulous Young Car Hauling and Amazon Accountant with 5+ years of experience. Adept at financial reporting, budgeting, and cost analysis for transportation operations. Skilled in navigating complex Amazon seller policies and maximizing profitability. Excellent attention to detail and strong analytical capabilities.',
    image: '/accountant.jpg',
  },
  {
    id: 7,
    name: 'John Doe',
    position: 'Dispatcher',
    description: 'Adaptable Young Amazon Dispatcher with 3+ years of experience. Excels at coordinating delivery schedules, monitoring driver performance, and addressing customer inquiries. Proficient in utilizing logistics software and data analysis to optimize routing and improve operational efficiency. Committed to providing exceptional customer service.',
    image: '/unknown.jpg',
  },
  {
    id: 8,
    name: 'Jane Doe',
    position: 'Marketing Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/unknown.jpg',
  },
  {
    id: 9,
    name: 'John Doe',
    position: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/zafar.jpg',
  },
  {
    id: 10,
    name: 'Jane Doe',
    position: 'Marketing Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/zafar.jpg',
  },
  {
    id: 11,
    name: 'John Doe',
    position: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/zafar.jpg',
  },
  {
    id: 12,
    name: 'Jane Doe',
    position: 'Marketing Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/zafar.jpg',
  },
];

export default function EmployeesPage() {
  return (
    <div>
       <div className={styles.goBackContainer}>
  <Link href="/">
    <span className={styles.goBackButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Go Back
    </span>
  </Link>
</div>
 <h1 className={styles.title}>Our Team</h1> <br />
    <div className={styles.employeesContainer}>
     
     
      {employees.map((employee) => (
        <div key={employee.id} className={styles.employeeCard}>
          <Image
            src={employee.image}
            alt={employee.name}
            width={200}
            height={200}
          />
          <h2>{employee.name}</h2>
          <p>{employee.position}</p>
          <p>{employee.description}</p>
        </div>
      ))}
      <div className={styles.stars}>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
  <div className={styles.star}></div>
</div>
    </div></div>
  );
}