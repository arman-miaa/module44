import { LineChart, Line, XAxis, YAxis } from "recharts";

const LineReachart = () => {
 const studentsMarks = [
   { id: 1, name: "Alice", math: 78, physics: 84, chemistry: 76 },
   { id: 2, name: "Bob", math: 85, physics: 75, chemistry: 82 },
   { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
   { id: 4, name: "David", math: 67, physics: 73, chemistry: 68 },
   { id: 5, name: "Eve", math: 74, physics: 80, chemistry: 72 },
   { id: 6, name: "Frank", math: 88, physics: 79, chemistry: 85 },
   { id: 7, name: "Grace", math: 95, physics: 92, chemistry: 94 },
   { id: 8, name: "Hannah", math: 60, physics: 65, chemistry: 62 },
   { id: 9, name: "Ivy", math: 82, physics: 78, chemistry: 80 },
   { id: 10, name: "Jack", math: 89, physics: 85, chemistry: 87 },
 ];


    return (
      <div>
            <LineChart width={500} height={300} data={studentsMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
          <Line dataKey="math" stroke="red"></Line>
          <Line dataKey="physics" stroke="blue"></Line>
        </LineChart>
      </div>
    );
};

export default LineReachart;
