import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import SingleSelectDropDown from './SingleSelectDropDown'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import logo_icon from '../resources/auditbotlogo.PNG'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';



const height = 100
const labelOffset = -6
const focused = 3

const COLORS = ["#004c6d", "#255e7e", "#3d708f", "#5383a1", "#7CB342", "#64B5F6", "#4DD0E1", "#AED581", "#0277bd", "#90caf9", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSFIRSTSTACK = ["#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSSECONDSTACK = ["#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSTHIRDSTACK = ["#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const RADIAN = Math.PI / 180;

const legendMap=[{id:'ZCOUNT1',value:'Executed Risk',type: "square"},{id:'ZCOUNT2',value:'Executed Risk',type: "square"},{id:'ZCOUNT3',value:'Executed Risk',type: "square"}]

const useStyles = makeStyles((theme) => ({
  root: {

    padding: 2,
    alignItems: "center",
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  },
  media: {
    width: 300,
    height: 75,
    marginLeft: '5%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  resize: {
    fontSize: 15,
    padding: '12px 14px'
  }
}));





/* #0288D1 */



const GRCStackGraphCard = (props) => {

  const proesResultData = (data, key) => {
    if (data && data != null && data.length > 0) {
      let filtereddata = data.filter(p => p.ZTYPE === key)

      let mappedData = [];
      filtereddata.map(v => {
        let temp = {};
        temp.name = v.GROUP_DESC1;
        temp.COUNT1 = v.ZCOUNT1;
        temp.COUNT2 = v.ZCOUNT2;
        temp.COUNT3 = v.ZCOUNT3;
        temp.ZTYPE = v.ZTYPE;
        temp.GROUPBY1 = v.GROUPBY1;
        mappedData.push(temp);
      })
      /*     let array=[1,2,3,4,5,6,7,8,9,10]
          array.map(p=>{
              let temp={};
              temp.x='test'+p;
              temp.y=p*2;
              values.push(temp); 
          }) */
      return filtereddata
    } else {
      return null;
    }
  }
  const getChart = (data, value, color, stack) => {
    switch (value) {


      case 1:
        if (stack == '1')
          return getRCHBarChartTwoStack(data, color);
        if (stack == '2')
          return getRCHBarChartTwoStack(data, color);
        if (stack == '3')
          return getRCHBarChartThreeStack(data, color);

      case 2:
        if (stack == '1')
          return getRCVBarChartTwoStack(data, color);
        if (stack == '2')
          return getRCVBarChartTwoStack(data, color);
        if (stack == '3')
          return getRCVBarChartThreeStack(data, color);


      default:
        return getRCHBarChartTwoStack(data, color)
    }
  }





  const getRCVBarChartTwoStack = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={25}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
       <Tooltip formatter={(value, name, props)=>tooltipText(value,name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px'}}/>
       <Legend  iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '10px'
      }} formatter={(value, entry, index)=>legendText(value)} />
      <XAxis dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis interval={0} stroke="#bdbdbd" width={40} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" stackId="a" fill='#009ed7' onClick={(data) => this.getData(data)} />
      <Bar dataKey="ZCOUNT2" stackId="a" fill='#a05195' onClick={(data) => this.getData(data)} />

      {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#00bcd4'} onClick={(data) => this.getData(data)} >
              {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
              }
          </Bar>
          <Bar dataKey="ZCOUNT2" stackId="a" fill={'#00bcd4'} onClick={(data) => this.getData(data)} >
              {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
              }
          </Bar> */}
    </BarChart></ResponsiveContainer>)
  }


  const getRCVBarChartThreeStack = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={25}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
        <Tooltip formatter={(value, name, props)=>tooltipText(value,name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px'}}/>
        <Legend  iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '10px'
      }} formatter={(value, entry, index)=>legendText(value)} />
      <XAxis dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis interval={0} stroke="#bdbdbd" width={40} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" stackId="a" fill='#009ed7' onClick={(data) => this.getData(data)} />
      <Bar dataKey="ZCOUNT2" stackId="a" fill='#a05195' onClick={(data) => this.getData(data)} />
      <Bar dataKey="ZCOUNT3" stackId="a" fill='#f95d6a' onClick={(data) => this.getData(data)} />
      {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#00bcd4'} onClick={(data) => this.getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
            }
        </Bar>
        <Bar dataKey="ZCOUNT2"  stackId="a" fill={'#00bcd4'} onClick={(data) => this.getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
            }
        </Bar>
        <Bar dataKey="ZCOUNT3" stackId="a" fill={'#00bcd4'} onClick={(data) => this.getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSTHIRDSTACK[index % COLORSTHIRDSTACK.length]} />)
            }
        </Bar> */}
    </BarChart></ResponsiveContainer>)
  }


  const CustomizedAxisTick = ({
    x, y, stroke, payload,
  }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={0} textAnchor="end" fontSize={10} fill="black" fontFamily='Helvetica' transform="rotate(-15)">{payload.value}</text>
      </g>
    );
  }

  const CustomizedYAxisTick = ({
    x, y, stroke, payload,
  }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={5} textAnchor="end" fontSize={10} fill="black" fontFamily='Helvetica' transform="rotate(-45)">{payload.value}</text>
      </g>
    );
  }





  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index, value,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {value}
      </text>
    );
  };



  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value, name
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 15) * cos;
    const my = cy + (outerRadius + 15) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 11;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.value}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={'#00bcd4'}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={'#00bcd4'} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={'#00bcd4'} stroke={'#00bcd4'} />
        <text x={ex + (cos >= 0 ? 1 : -1) * 5} y={ey} fontSize={12} textAnchor={textAnchor} fill="#00bcd4">{`${name}`}</text>
      </g>
    );
  };




  const getRCHBarChartThreeStack = (data, color) => {

    return (<ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={"vertical"}
        data={data}
        barCategoryGap="10%"
        maxBarSize={25}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
         <Tooltip formatter={(value, name, props)=>tooltipText(value,name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px'}}/>
        <Legend  iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '10px'
      }} formatter={(value, entry, index)=>legendText(value)} />

        <XAxis type='number' stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis dataKey="GROUP_DESC1" type="category" stroke="#bdbdbd" width={60} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="ZCOUNT1" stackId="a" fill='#009ed7' onClick={(data) => this.getData(data)} />
        <Bar dataKey="ZCOUNT2" stackId="a" fill='#a05195' onClick={(data) => this.getData(data)} />
        <Bar dataKey="ZCOUNT3" stackId="a" fill='#f95d6a' onClick={(data) => this.getData(data)} />
        {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#48C9B0'} onClick={(data)=>this.getData(data)}>
                      {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                      }
                      </Bar>
                      <Bar dataKey="ZCOUNT2" stackId="a" fill={'#48C9B0'} onClick={(data)=>this.getData(data)}>
                      {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                      }
                      </Bar>
                      <Bar dataKey="ZCOUNT3" stackId="a" fill={'#48C9B0'} onClick={(data)=>this.getData(data)}>
                      {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSTHIRDSTACK[index % COLORSTHIRDSTACK.length]} />)
                      }
                      </Bar> */}
      </BarChart></ResponsiveContainer>)
  }


  const getRCHBarChartTwoStack = (data, color) => {

    return (<ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={"vertical"}
        data={data}
        barCategoryGap="10%"
        maxBarSize={25}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
          <Tooltip formatter={(value, name, props)=>tooltipText(value,name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px'}}/>
        <Legend  iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '10px'
      }} formatter={(value, entry, index)=>legendText(value)} />
        <XAxis type='number' stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis dataKey="GROUP_DESC1" type="category" stroke="#bdbdbd" width={60} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="ZCOUNT1" stackId="a" fill='#009ed7' onClick={(data) => this.getData(data)} />
        <Bar dataKey="ZCOUNT2" stackId="a" fill='#a05195' onClick={(data) => this.getData(data)} />

        {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#48C9B0'} onClick={(data)=>this.getData(data)}>
                          {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                          }
                          </Bar>
                          <Bar dataKey="ZCOUNT2" stackId="a" fill={'#48C9B0'} onClick={(data)=>this.getData(data)}>
                          {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                          }
                          </Bar> */}

      </BarChart></ResponsiveContainer>)
  }

const legendText=(value)=>{
  if(value=='ZCOUNT1'){
    return "Executed Risks"
  }
  if(value=='ZCOUNT2'){
    return "Non-Executed Risks"
  }
  if(value=='ZCOUNT3'){
    return "Never Executed Risks"
  }
}

const tooltipText=(value,name)=>{
  if(name=='ZCOUNT1'){
    return [value,"Executed Risks",]
  }
  if(name=='ZCOUNT2'){
    return [value,"Non-Executed Risks"]
  }
  if(name=='ZCOUNT3'){
    return [value,"Never Executed Risks"]
  }
}


  const changeGraph = (event) => {
    setChartState(event.target.value)
  }

  const classes = useStyles();
  const [chartState, setChartState] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  let getchartDataResult1 = proesResultData(props.data, props.chart);
  let firctChart = getChart(getchartDataResult1, chartState, '#00bcd4', props.stack)

  return (
    <Card className={classes.root} elevation='5' style={{ height: props.height }}>
      <CardContent style={{ padding: 2, marginRight: 5, height: '85%' }}>
        {firctChart}
      </CardContent>

      <CardActions style={{ margin: 0, padding: 2 }}>
      <Grid container spacing={2}>
          <Grid item md={3}>
          <FormControl variant="outlined" className={classes.formControl} size="small">
          <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={chartState}
            onChange={(event) => changeGraph(event)}
            label={props.label}
            style={{ height: 20 }}
          >
            <MenuItem value={1} key='horizontal' style={{ padding: 5 }}><AssessmentOutlinedIcon fontSize="small" style={{ transform: 'rotate(90deg)' }} /></MenuItem>
            <MenuItem value={2} key='vertical' style={{ padding: 5 }}><AssessmentOutlinedIcon fontSize="small" /></MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item md={6}>
        <Typography variant="subtitle2" style={{fontFamily:'Helvetica'}}>
        {props.name}
      </Typography>
         
        </Grid>
        <Grid item md={3}>
        
        </Grid>
        
        </Grid>

        
      </CardActions>

    </Card>
  );

}

export default withRouter(GRCStackGraphCard)