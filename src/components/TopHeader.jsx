import React from 'react'

const TopHeader = () => {
    const [isVisible, setIsVisible] = useState(true);
    if(!isVisible) return null;
    
    return (
    <div className="bg-blue-500 text-white text-center p-2">

    </div>
  );
}

export default TopHeader;