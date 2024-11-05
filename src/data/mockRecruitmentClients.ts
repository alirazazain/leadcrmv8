import { Client } from '../store/recruitmentStore';

export const mockRecruitmentClients: Client[] = [
  {
    id: '1',
    name: 'Eleven Dev Private Limited',
    industry: 'Technology',
    location: 'Sydney, Australia',
    website: 'https://www.demowebmark.com',
    linkedin: 'https://linkedin.com/company/elevendev',
    jobCount: 3,
    owner: {
      name: 'Ali R Zain',
      email: 'liam12@gmail.com'
    },
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-11T15:30:00Z'
  },
  {
    id: '2',
    name: 'TechForward Solutions',
    industry: 'Software Development',
    location: 'Melbourne, Australia',
    website: 'https://www.techforward.com',
    linkedin: 'https://linkedin.com/company/techforward',
    jobCount: 5,
    owner: {
      name: 'Sarah Chen',
      email: 'sarah.chen@techforward.com'
    },
    createdAt: '2024-03-09T08:00:00Z',
    updatedAt: '2024-03-11T12:30:00Z'
  },
  {
    id: '3',
    name: 'Digital Dynamics Corp',
    industry: 'Digital Marketing',
    location: 'Brisbane, Australia',
    website: 'https://www.digitaldynamics.com',
    linkedin: 'https://linkedin.com/company/digitaldynamics',
    jobCount: 2,
    owner: {
      name: 'Michael Brown',
      email: 'm.brown@digitaldynamics.com'
    },
    createdAt: '2024-03-08T14:00:00Z',
    updatedAt: '2024-03-10T09:15:00Z'
  },
  {
    id: '4',
    name: 'InnovateTech Systems',
    industry: 'IT Services',
    location: 'Perth, Australia',
    website: 'https://www.innovatetech.com',
    linkedin: 'https://linkedin.com/company/innovatetech',
    jobCount: 4,
    owner: {
      name: 'Jessica Wilson',
      email: 'j.wilson@innovatetech.com'
    },
    createdAt: '2024-03-07T11:00:00Z',
    updatedAt: '2024-03-09T16:45:00Z'
  },
  {
    id: '5',
    name: 'CloudScale Solutions',
    industry: 'Cloud Computing',
    location: 'Adelaide, Australia',
    website: 'https://www.cloudscale.com',
    linkedin: 'https://linkedin.com/company/cloudscale',
    jobCount: 1,
    owner: {
      name: 'David Thompson',
      email: 'd.thompson@cloudscale.com'
    },
    createdAt: '2024-03-06T09:30:00Z',
    updatedAt: '2024-03-08T14:20:00Z'
  }
];