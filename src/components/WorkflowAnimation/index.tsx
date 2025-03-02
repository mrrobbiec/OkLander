import React from 'react';
import { motion } from 'framer-motion';
import WorkflowItem from './WorkflowItem';
import { workflowSteps } from './workflowData';

const WorkflowAnimation: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-slate-950 text-white relative overflow-hidden">
      {/* Scan lines overlay - reusing the same style as in other sections */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 0.5px, transparent 0.5px, transparent 3px)',
            backgroundSize: '100% 3.5px',
            opacity: 0.7,
            filter: 'blur(0.2px)',
          }}
        ></div>
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 0.5px, transparent 0.5px, transparent 7px)',
            backgroundSize: '100% 7.5px',
            animation: 'scanline-animation 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
            opacity: 0.8,
            filter: 'blur(0.3px)',
          }}
        ></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Flow with OkEngine</h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Our integrated platform streamlines your entire data journey from ingestion to insights.
          </p>
          <div className="h-1 w-16 bg-blue mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="workflow-steps flex flex-wrap justify-center items-center gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {workflowSteps.map((step, idx) => (
            <React.Fragment key={step.id}>
              {idx > 0 && (
                <div className="text-blue text-2xl hidden md:block">→</div>
              )}
              <WorkflowItem step={step} index={idx} />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowAnimation;
