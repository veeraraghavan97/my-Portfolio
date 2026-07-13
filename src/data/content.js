export const profile = {
  name: 'Veera Raghavan',
  fullName: 'Veera Raghavan Muthappan',
  location: 'Surrey, UK',
  email: 'msriram909@gmail.com',
  linkedin: 'https://www.linkedin.com/in/veera-raghavan-m-77478114a',
  linkedinLabel: 'linkedin.com/in/veera-raghavan-m',
  // Change this one line to rename the robot assistant everywhere.
  assistantName: 'Ping',
}

export const pipeline = [
  {
    stage: 'build',
    desc: '5+ yrs Azure IaC, CI/CD, AKS across enterprise clients',
    status: 'pass',
  },
  {
    stage: 'harden',
    desc: 'MSc Information Security, RHUL — AKS security research',
    status: 'pass',
  },
  {
    stage: 'deploy',
    desc: 'Learning to build & operate AI agents in production',
    status: 'wip',
  },
  {
    stage: 'red team',
    desc: 'Offensive security practice on Hack The Box',
    status: 'wip',
  },
]

export const facts = [
  { k: 'based in', v: 'Surrey, UK' },
  { k: 'experience', v: '5+ years' },
  { k: 'education', v: 'MSc InfoSec, Royal Holloway' },
  { k: 'core cloud', v: 'Microsoft Azure' },
  { k: 'currently', v: 'AI agent ops + HTB' },
]

export const experience = [
  {
    title: 'DevOps Engineer — Team Lead',
    client: 'Boots UK',
    via: 'TCS',
    date: 'Apr 2021 – Sep 2023',
    bullets: [
      'Built automated CI/CD pipelines in Azure DevOps for builds, tests, and ARM template deployments',
      'Wrote Infrastructure as Code with ARM, Bicep and Terraform for repeatable environment provisioning',
      'Prototyped Sonar integration for automated code quality checks, cutting deployment cycles by 50%',
      'Built and shipped containerized apps through Azure Container Registry and AKS',
    ],
  },
  {
    title: 'Cloud Engineer',
    client: 'Walgreens',
    via: 'TCS',
    date: 'May 2020 – Mar 2021',
    bullets: [
      'Designed IaaS/PaaS solutions for high availability and cost efficiency using IaC',
      'Implemented Azure AD, conditional access, MFA and RBAC; secured secrets with Key Vault',
      'Architected a hub-and-spoke network with NSGs, Azure Firewall and DDoS protection',
      'Modernised legacy workloads into serverless, microservices-based deployments',
    ],
  },
  {
    title: 'Cloud Engineer',
    client: 'Walgreens Boots Alliance',
    via: 'TCS',
    date: 'Mar 2019 – Apr 2020',
    bullets: [
      'Assessed on-premises infrastructure and built Azure migration strategies with Azure Migrate',
      'Migrated VMs, databases and applications while minimising downtime and disruption',
      'Set up monitoring and cost-management practices to optimise resource utilisation',
    ],
  },
  {
    title: 'Linux Administrator',
    client: 'Marks & Spencer',
    via: 'TCS',
    date: 'Oct 2018 – Feb 2019',
    bullets: [
      'Administered RHEL systems supporting enterprise applications',
      'Maintained database security, backups and data quality',
      'Configured TCP/IP networking and firewall rules for secure connectivity',
    ],
  },
]

export const skillLayers = [
  { name: 'Orchestration', items: ['Kubernetes', 'AKS', 'Docker', 'Helm', 'Istio'] },
  { name: 'IaC & Automation', items: ['Bicep', 'ARM Templates', 'Terraform', 'Azure DevOps', 'Ansible'] },
  {
    name: 'Identity & Security',
    items: ['Azure AD', 'MFA', 'RBAC', 'Key Vault', 'NSGs / Firewalls', 'Policy & Compliance'],
  },
  { name: 'Platforms', items: ['Microsoft Azure', 'AWS', 'Linux (RHEL)'] },
  { name: 'Languages', items: ['Python', 'PowerShell', 'Bash', 'SQL'] },
]

export const certifications = [
  { name: 'MSc Information Security', issuer: 'Royal Holloway, University of London' },
  { name: 'Azure AZ-900', issuer: 'Microsoft — Fundamentals' },
  { name: 'Azure AZ-104', issuer: 'Microsoft — Administrator' },
  { name: 'AWS Cloud Practitioner', issuer: 'KodeKloud' },
  { name: 'Certified Kubernetes Administrator', issuer: 'Linux Foundation / KodeKloud' },
  { name: 'Certified Kubernetes Security Specialist', issuer: 'Udemy / KodeKloud' },
  { name: 'Linux Foundation Certified SysAdmin', issuer: 'KodeKloud' },
  { name: 'Certified Ethical Hacker', issuer: 'Prompt Infotech' },
  { name: 'Terraform, Helm & Istio', issuer: 'KodeKloud' },
  { name: 'Azure AZ-500 — Security Engineer', issuer: 'renewal in progress', pending: true },
]

// HTB machines — empty for now. Add entries like:
// { name: 'Machine name', difficulty: 'Easy', os: 'Linux', date: '2026-08-01' }
export const htbMachines = []

// Blog / field notes — empty for now. Add entries like:
// { date: '2026-08-01', title: 'Post title', excerpt: 'One-line summary.', tag: 'azure' }
export const notes = []

// Rule-based agent preview knowledge base. Swap for a real API call once
// the full agent is ready — see AgentWidget.jsx for the integration point.
export const agentKB = [
  {
    keywords: ['experience', 'work', 'job', 'career'],
    answer:
      'Five years as a cloud/DevOps engineer via TCS, on Boots UK, Walgreens, WBA and Marks & Spencer. See the Experience section for the full breakdown.',
  },
  {
    keywords: ['skill', 'stack', 'tech', 'tools', 'azure'],
    answer:
      'Azure, Kubernetes, Terraform/Bicep/ARM, Azure DevOps, plus Python/PowerShell/Bash. Security-focused: Azure AD, RBAC, Key Vault, NSGs.',
  },
  {
    keywords: ['education', 'degree', 'msc', 'university'],
    answer:
      'MSc Information Security from Royal Holloway, University of London — dissertation on hardening a managed AKS cluster end to end.',
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire'],
    answer: 'Best reached at msriram909@gmail.com, or via the LinkedIn link at the bottom of this page.',
  },
  {
    keywords: ['htb', 'hack the box', 'pentest', 'offensive'],
    answer:
      'Currently building offensive security skills on Hack The Box — early days. Machine write-ups will show up here once there is something to report.',
  },
  {
    keywords: ['agent', 'ai'],
    answer:
      'This is a rule-based preview — simple keyword matching, no model behind it yet. A full LLM-backed agent trained on this profile is planned for a future release.',
  },
]
