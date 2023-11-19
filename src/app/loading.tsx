export default function Loading() {

    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div>

        <h3 className="h-4 bg-gray-200 rounded-full" style={{width: "40%"}}></h3>

        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full"></li>
        </ul>
        </div>
    
    )
  }