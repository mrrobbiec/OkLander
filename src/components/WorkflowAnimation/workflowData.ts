
export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  // Optional icon property can be added if needed
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'okflow',
    title: 'OkFlow',
    description: 'Use decorators in your code to create data transformations & pipelines.'
  },
  {
    id: 'okdeploy',
    title: 'OkDeploy',
    description: 'Deploy in just a few lines—no more infra management.'
  },
  {
    id: 'okstream',
    title: 'OkStream',
    description: 'Stream your data with ease and get real-time ML inference out of the box.'
  },
  {
    id: 'okagent',
    title: 'OkAgent',
    description: 'Deploy GenAI agents leveraging real-time ML insights.'
  },
  {
    id: 'okdash',
    title: 'OkDash',
    description: 'A new generation of agentic BI with interactive "datarticles."'
  },
];
