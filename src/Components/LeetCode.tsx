import React,{useEffect, useState} from 'react'

type LeetCodeData = {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number,
    ranking: number;
    
};

const LeetCode: React.FC<{username : string}> = ({username}) => {
    
    const [data , setData] = useState<LeetCodeData | null>(null);
    const [loading , setLoading] = useState(true);
    const[error , setError] = useState<string | null> (null);

    useEffect(()=>{  
        fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
            .then(res =>{
                if(!res.ok) throw new Error(`API responded ${res.status}`);
                return res.json();
            })
            .then(json =>{
                setData({
                    totalSolved: json.totalSolved,
                    totalQuestions: json.totalQuestions,
                    easySolved: json.easySolved,
                    totalEasy: json.totalEasy,
                    mediumSolved: json.mediumSolved,
                    totalMedium: json.totalMedium,
                    hardSolved: json.hardSolved,
                    totalHard: json.totalHard,
                    ranking: json.ranking
                });
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Could not fetch LeetCode data');
                setLoading(true);
            })
    }, [username]);

     if (loading) return <p>Loading LeetCode stats…</p>;
    if (error)   return <p className="text-red-500">{error}</p>;
    if (!data)  return null;

    return(
        <>
             <section id="leetcode" className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">LeetCode Stats</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Total Solved</h3>
          <p className="text-2xl">{data.totalSolved} / {data.totalQuestions}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Easy Solved</h3>
          <p className="text-2xl">{data.easySolved} / {data.totalEasy}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Medium Solved</h3>
          <p className="text-2xl">{data.mediumSolved} / {data.totalMedium}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Hard Solved</h3>
          <p className="text-2xl">{data.hardSolved} /{data.totalHard}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md text-center sm:col-span-2 lg:col-span-3">
          <h3 className="text-xl font-semibold mb-2">Global Ranking</h3>
          <p className="text-2xl">{data.ranking.toLocaleString()}</p>
        </div>
        
      </div>
      <div className="mt-6 text-center">
        <a
          href={`https://leetcode.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View full profile on LeetCode →
        </a>
      </div>
    </section>
        </>
    )
};

export default LeetCode;