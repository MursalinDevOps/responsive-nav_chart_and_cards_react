import { LineChart, Line, XAxis, YAxis } from "recharts";
const Charts = () => {
    const studentsData = [
        { name: 'Mahtab', mark: 68 },
        { name: 'Tanjila', mark: 85 },
        { name: 'Antu', mark: 70 },
        { name: 'Sabbir', mark: 59 },
        { name: 'Mursalin', mark: 84 },
    ];

    return (

        <div>
            {/* LINE CHART */}
            <LineChart width={600} height={300} data={studentsData}>
                <XAxis dataKey='name'></XAxis>
                <Line type='monotone' dataKey='mark' stroke="#8884d8"></Line>
                <YAxis></YAxis>
            </LineChart>


            {/* BAR CHART */}
        </div>


    );
};

export default Charts;