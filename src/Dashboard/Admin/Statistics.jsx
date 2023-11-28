
import Chart from "react-apexcharts";
const Statistics = () => {


    return (
        <div className="hero lg:min-h-screen">
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={{

                            }}
                            series={[{
                                name:'company',
                                data:[100,200,232,132,422,132]
                            }]}
                            type="bar"
                            width="500"
                            height="500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;