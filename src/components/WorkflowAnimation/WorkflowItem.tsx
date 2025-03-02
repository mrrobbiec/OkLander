import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { WorkflowStep } from './workflowData';

interface WorkflowItemProps {
  step: WorkflowStep;
  index: number;
}

const WorkflowItem: React.FC<WorkflowItemProps> = ({ step, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      {/* Each item is a motion.div so we can animate it */}
      <motion.div
        className="workflow-item px-4 py-2 bg-dark-blue-accent/10 border border-blue/30 rounded-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15, duration: 0.3 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
      >
        {/* Optional: Step Icon */}
        {/* <div className="workflow-icon">{step.icon}</div> */}
        <div className="workflow-title font-bold text-white">{step.title}</div>
      </motion.div>

      {/* Custom Tooltip */}
      {showTooltip && (
        <motion.div
          className="absolute z-10 p-2 bg-slate-900 text-white text-sm rounded shadow-lg mt-2 w-48"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ 
            left: '50%', 
            transform: 'translateX(-50%)',
            top: '100%'
          }}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-slate-900"></div>
          {step.description}
        </motion.div>
      )}
    </div>
  );
};

export default WorkflowItem;
