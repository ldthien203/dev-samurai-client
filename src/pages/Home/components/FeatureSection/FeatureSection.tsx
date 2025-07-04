import { FiUserPlus, FiBarChart } from 'react-icons/fi'
import { GrLink } from 'react-icons/gr'

const FeatureSection = () => {
  return (
    <section>
      <h2 className="border-l border-r border-b text-4xl font-semibold tracking-tight first:mt-0 pt-10 pb-10">
        Attention Grabbing{' '}
        <span className="text-gray-500 border border-solid border-blue-400 p-1 ">
          Title
        </span>
      </h2>
      <div className="border-l border-r">
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 divide-y md:divide-y-0 md:divide-x divide-dashed">
          <div className="flex flex-col items-start gap-4 p-10 text-left">
            <div className="w-10 h-10 flex items-center justify-center rounded-md shadow-sm bg-white border">
              <FiUserPlus className="text-gray-600" />
            </div>
            <h3 className="font-semibold">Problem 1</h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Describe a significant problem your ideal customer profile has.
              Explain how this problem impacts their goals or daily operations.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 p-10 text-left">
            <div className="w-10 h-10 flex items-center justify-center rounded-md shadow-sm bg-white border">
              <FiBarChart className="text-gray-600" />
            </div>
            <h3 className="font-semibold">Problem 2</h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Describe a significant problem your ideal customer profile has.
              Explain how this problem impacts their goals or daily operations.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 p-10 text-left">
            <div className="w-10 h-10 flex items-center justify-center rounded-md shadow-sm bg-white border">
              <GrLink className="text-gray-600" />
            </div>
            <h3 className="font-semibold">Problem 3</h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Describe a significant problem your ideal customer profile has.
              Explain how this problem impacts their goals or daily operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
