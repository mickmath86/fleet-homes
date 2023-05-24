const stats = [
    { label: 'Transactions every 24 hours', value: '44 million' },
    { label: 'Assets under holding', value: '$119 trillion' },
    { label: 'New users annually', value: '46,000' },
  ]
  
  export default function Mission() {
    return (
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                At Fleet Ventures, our mission is to empower property owners and investors by unlocking the full potential of real estate through innovative and creative financing solutions. 
                We strive to bridge the gap between sellers looking to maximize their property's value and buyers seeking lucrative investment opportunities.
                 Our dedicated team of real estate experts is committed to providing transparent, efficient, and personalized services that exceed our clients' expectations. 
                 
                </p>
                <p className="mt-10 text-xl leading-8 text-gray-600">
                With a focus on integrity, collaboration, and long-term partnerships, we aim to revolutionize the real estate industry, creating opportunities for growth and prosperity for all stakeholders involved.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  