import React from 'react';
import CodeBlock from './ui/CodeBlock';
import OkStreamBackground from './ui/OkStreamBackground';
import OkFlowBackground from './ui/OkFlowBackground';
import OkDeployBackground from './ui/OkDeployBackground';
import { TypewriterLogo } from './ui/TypewriterLogo';

const CodeExamplesSection: React.FC = () => {
  // Code examples from the provided content
  const okStreamCode = `from okengine import OkStream

# Create a stream processor
stream = OkStream("user_events")

# Configure windowed processing
result = stream.window(
    size="5m",  # 5-minute window
    metrics=["mean", "std"]  # Compute statistics
).process(data)

# Use SQL for complex analytics
from okengine.okstream import SQLProcessor

sql = SQLProcessor()
sql.create_incremental_view(
    "user_preferences",
    """
    SELECT user_id,
           vector_similarity(user_embedding, product_embedding) as score
    FROM user_events
    WINDOW SLIDING (5 MINUTES)
    """
)`;

  const okFlowCode = `from okengine import Pipeline, task
from okengine.okflow import LLMProcessor, Stream

@task(cache=True)
def enrich_data(data: pd.DataFrame) -> pd.DataFrame:
    llm = LLMProcessor()
    return llm.batch_process(
        data,
        prompt_template="Analyze sentiment: {text}",
        output_column="sentiment"
    )

@task(stream=True)
def detect_anomalies(sensor_data: Stream) -> Stream:
    return sensor_data.window(
        size="5m",
        metrics=["mean", "std"],
        anomaly_threshold=3.0
    )

# Deploy pipeline
flow = Pipeline([enrich_data, detect_anomalies])
flow.deploy()`;

  const okDeployCode = `from okengine import Application, Resources

app = Application(
    name="recommendation-engine",
    resources=Resources(
        cpu="4",
        memory="16Gi",
        gpu="1",
        auto_scale={
            "min": 2,
            "max": 10,
            "target_qps": 100000
        }
    )
)

# Deploy with zero configuration
app.deploy(environment="production")

# Monitor performance
metrics = app.status()
alerts = app._monitor.get_active_alerts()`;

  return (
    <section id="code-examples" className="py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-1">Code Examples</h2>
          <p className="text-white/80 mb-4">See how easy it is to build with OkEngine</p>
          <div className="h-1 w-16 bg-blue mx-auto mb-6"></div>
        </div>

        {/* OkStream Example */}
        <div className="mb-16 rounded-lg overflow-hidden border border-blue/30 bg-slate-900 relative min-h-[400px]">
          {/* Background for the entire container */}
          <div className="absolute inset-0 overflow-hidden h-full">
            <OkStreamBackground />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
            {/* Left side: Text content */}
            <div className="p-8 flex flex-col justify-center md:col-span-1 bg-slate-900/70 backdrop-blur-sm">
              <div className="mb-4 text-blue">
                <TypewriterLogo text="OkStream" />
              </div>
              <p className="mb-4 text-white/80 text-lg">
                Real-Time Intelligence at Scale
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Process millions of events per second</li>
                <li>Full SQL support with incremental computation</li>
                <li>Windowed processing for time-series data</li>
                <li>Built-in vector operations for AI workloads</li>
              </ul>
            </div>
            
            {/* Right side: Code block */}
            <div className="p-6 md:col-span-2">
              <CodeBlock 
                code={okStreamCode} 
                language="python"
              />
            </div>
          </div>
        </div>

        {/* OkFlow Example */}
        <div className="mb-16 rounded-lg overflow-hidden border border-blue/30 bg-slate-900 relative min-h-[400px]">
          {/* Background for the entire container */}
          <div className="absolute inset-0 overflow-hidden h-full">
            <OkFlowBackground />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
            {/* Left side: Text content */}
            <div className="p-8 flex flex-col justify-center md:col-span-1 bg-slate-900/70 backdrop-blur-sm">
              <div className="mb-4 text-blue">
                <TypewriterLogo text="OkFlow" />
              </div>
              <p className="mb-4 text-white/80 text-lg">
                AI-Native Workflow Engine
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Build intelligent data pipelines with Python</li>
                <li>Seamless integration with LLMs and AI models</li>
                <li>Automatic caching and optimization</li>
                <li>Stream and batch processing in a unified API</li>
              </ul>
            </div>
            
            {/* Right side: Code block */}
            <div className="p-6 md:col-span-2">
              <CodeBlock 
                code={okFlowCode} 
                language="python"
              />
            </div>
          </div>
        </div>

        {/* OkDeploy Example */}
        <div className="mb-16 rounded-lg overflow-hidden border border-blue/30 bg-slate-900 relative min-h-[400px]">
          {/* Background for the entire container */}
          <div className="absolute inset-0 overflow-hidden h-full">
            <OkDeployBackground />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
            {/* Left side: Text content */}
            <div className="p-8 flex flex-col justify-center md:col-span-1 bg-slate-900/70 backdrop-blur-sm">
              <div className="mb-4 text-blue">
                <TypewriterLogo text="OkDeploy" />
              </div>
              <p className="mb-4 text-white/80 text-lg">
                Zero-Ops Platform
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Deploy and scale AI applications with zero operational overhead</li>
                <li>Automatic resource allocation and scaling</li>
                <li>Built-in monitoring and alerting</li>
                <li>Multi-cloud and on-premise deployment options</li>
              </ul>
            </div>
            
            {/* Right side: Code block */}
            <div className="p-6 md:col-span-2">
              <CodeBlock 
                code={okDeployCode} 
                language="python"
              />
            </div>
          </div>
        </div>
        {/* OkDash Section */}
        <div className="mt-16 mb-16 rounded-lg overflow-hidden border border-blue/30 bg-slate-900 relative min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
            {/* Left side: Text content */}
            <div className="p-8 flex flex-col justify-center bg-slate-900/70">
              <div className="mb-4 text-blue">
                <TypewriterLogo text="OkDash" />
              </div>
              <p className="mb-4 text-white/80 text-lg">
                Data Journalism as Business Intelligence
              </p>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>First-class data journalism out of the box from any OkEngine source</li>
                <li>Plug into your existing data for AAA data science reporting</li>
                <li>Interactive dashboards with real-time updates</li>
                <li>Ditch PowerBI for a more powerful, flexible solution</li>
              </ul>
              <div className="mt-6">
                <button className="px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-700 transition-colors">
                  Try OkDash Today
                </button>
              </div>
            </div>
            
            {/* Right side: Screenshot */}
            <div className="p-6 flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-0.5 bg-blue/30 rounded-lg blur opacity-75"></div>
                <video 
                  src="/captureOkDash.mov" 
                  className="relative rounded-lg w-full h-auto z-10 border border-blue/20"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExamplesSection;
