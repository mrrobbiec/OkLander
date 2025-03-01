import React from 'react';
import CodeBlock from './ui/CodeBlock';

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
        <div className="mb-16 rounded-lg overflow-hidden border border-blue/30 bg-slate-900 relative">
          {/* Subtle texture background */}
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
            {/* Left side: Text content */}
            <div className="p-8 flex flex-col justify-center md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-blue">OkStream</h3>
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
            <div className="bg-slate-950 p-6 md:col-span-2">
              <CodeBlock 
                code={okStreamCode} 
                language="python" 
                title="okstream_example.py" 
              />
            </div>
          </div>
        </div>

        {/* OkFlow Example */}
        <div className="mb-16 rounded-lg overflow-hidden border border-blue/30 bg-slate-900 relative">
          {/* Subtle texture background */}
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
            {/* Left side: Text content */}
            <div className="p-8 flex flex-col justify-center md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-blue">OkFlow</h3>
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
            <div className="bg-slate-950 p-6 md:col-span-2">
              <CodeBlock 
                code={okFlowCode} 
                language="python" 
                title="okflow_example.py" 
              />
            </div>
          </div>
        </div>

        {/* OkDeploy Example */}
        <div className="mb-16 rounded-lg overflow-hidden border border-blue/30 bg-slate-900 relative">
          {/* Subtle texture background */}
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
            {/* Left side: Text content */}
            <div className="p-8 flex flex-col justify-center md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-blue">OkDeploy</h3>
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
            <div className="bg-slate-950 p-6 md:col-span-2">
              <CodeBlock 
                code={okDeployCode} 
                language="python" 
                title="okdeploy_example.py" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExamplesSection;
