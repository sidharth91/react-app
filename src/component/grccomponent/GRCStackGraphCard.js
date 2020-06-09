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
import SingleSelectDropDown from '../SingleSelectDropDown'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import IconButton from '@material-ui/core/IconButton';
import TocIcon from '@material-ui/icons/Toc';
import GRCDraggableDialog from './GRCDraggableDialog'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import GRCDashbordTable from './GRCDashbordTable';
import CloseIcon from '@material-ui/icons/Close';
import BarChartIcon from '@material-ui/icons/BarChart';
import GRCReportTable from './GRCReportTable'


const height = 100
const labelOffset = -6
const focused = 3

let COLORS = ["#004c6d", "#255e7e", "#3d708f", "#5383a1", "#7CB342", "#64B5F6", "#4DD0E1", "#AED581", "#0277bd", "#90caf9", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSFIRSTSTACK = ["#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#009ed7", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSSECONDSTACK = ["#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#a05195", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const COLORSTHIRDSTACK = ["#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#f95d6a", "#4fc3f7", "#ffab91", "#66bb6a", "#9e9d24", "#ffe082", "#26a69a", "#00acc1", "#e57373", "#ff8a80", "#8d6e63", "#ff80ab", "#f48fb1", "#9575cd", "#7986cb", "#64b5f6", "#ffb74d", "#ea80fc", "#4dd0e1", "#d4e157", "#9ccc65", "#fff176", "#ffd740", "#90a4ae", "#eeff41", "#ccff90", "#c0ca33", "#0097a7", "#29b6f6"];
const RADIAN = Math.PI / 180;

const legendMap = [{ id: 'ZCOUNT1', value: 'Executed Risk', type: "square" }, { id: 'ZCOUNT2', value: 'Executed Risk', type: "square" }, { id: 'ZCOUNT3', value: 'Executed Risk', type: "square" }]

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
  },
  icon: {
    right: 0,
    height:20
  },
  rootSelect:{
    paddingLeft: '3px',
    paddingRight: '18px !important'
  }
}));



function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

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
      case 3:
        if (stack == '1')
          return getRCVBarChartTwo(data, color);
        if (stack == '2')
          return getRCVBarChartTwo(data, color);
        if (stack == '3')
          return getRCVBarChartThree(data, color);

      default:
        return getRCHBarChartTwoStack(data, color)
    }
  }





  const getRCVBarChartTwoStack = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={35}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="2 2" /> */}
      <LabelList dataKey="name" position="top" />
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '10px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis interval={0} stroke="#bdbdbd" width={40} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)}>
        <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>

      {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
              {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
              }
          </Bar>
          <Bar dataKey="ZCOUNT2" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
              {
                  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
              }
          </Bar> */}
    </BarChart></ResponsiveContainer>)
  }


  const getRCVBarChartTwo = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={35}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="2 2" /> */}
      <LabelList dataKey="name" position="top" />
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '10px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis interval={0} stroke="#bdbdbd" width={40} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" fill={colorState[0]} onClick={(data) => getData(data)} >
        <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT2" fill={colorState[1]} onClick={(data) => getData(data)}>
        <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>


    </BarChart></ResponsiveContainer>)
  }


  const getRCVBarChartThreeStack = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={35}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="2 2" /> */}
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '10px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis interval={0} stroke="#bdbdbd" width={40} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >

        <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >

        <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT3" stackId="a" fill={colorState[2]} onClick={(data) => getData(data)} >

        <LabelList dataKey="ZCOUNT3" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
            }
        </Bar>
        <Bar dataKey="ZCOUNT2"  stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
            }
        </Bar>
        <Bar dataKey="ZCOUNT3" stackId="a" fill={'#00bcd4'} onClick={(data) => getData(data)} >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSTHIRDSTACK[index % COLORSTHIRDSTACK.length]} />)
            }
        </Bar> */}
    </BarChart></ResponsiveContainer>)
  }


  const getRCVBarChartThree = (data, color) => {
    return (<ResponsiveContainer width='100%' height='100%'><BarChart
      layout={"horizontal"}
      data={data}
      barCategoryGap="10%"
      maxBarSize={35}
      margin={{
        top: 5, right: 0, left: 0, bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="2 2" /> */}
      <Tooltip formatter={(value, name, props) => tooltipText(value, name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
      <Legend iconSize={10} wrapperStyle={{
        fontFamily: 'Helvetica', fontSize: '10px'
      }} formatter={(value, entry, index) => legendText(value)} />
      <XAxis dataKey="GROUP_DESC1" interval={0} stroke="#bdbdbd" tick={CustomizedAxisTick} />
      <YAxis interval={0} stroke="#bdbdbd" width={40} tick={CustomizedYAxisTick} />
      <Bar dataKey="ZCOUNT1" fill={colorState[0]} onClick={(data) => getData(data)} >

        <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT2" fill={colorState[1]} onClick={(data) => getData(data)} >

        <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
      <Bar dataKey="ZCOUNT3" fill={colorState[2]} onClick={(data) => getData(data)} >

        <LabelList dataKey="ZCOUNT3" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
      </Bar>
    </BarChart></ResponsiveContainer>)
  }


  const CustomizedAxisTick = ({
    x, y, stroke, payload,
  }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={0} textAnchor="end" fontSize={11} fill="black" fontFamily='Helvetica' transform="rotate(-15)">{payload.value}</text>
      </g>
    );
  }

  const CustomizedYAxisTick = ({
    x, y, stroke, payload,
  }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={5} textAnchor="end" fontSize={11} fill="black" fontFamily='Helvetica' transform="rotate(-45)">{payload.value}</text>
      </g>
    );
  }





  const getRCHBarChartThreeStack = (data, color) => {

    return (<ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout={"vertical"}
        data={data}
        barCategoryGap="10%"
        maxBarSize={35}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="2 2" /> */}
        <Tooltip formatter={(value, name, props) => tooltipText(value, name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
        <Legend iconSize={10} wrapperStyle={{
          fontFamily: 'Helvetica', fontSize: '10px'
        }} formatter={(value, entry, index) => legendText(value)} />

        <XAxis type='number' stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis dataKey="GROUP_DESC1" type="category" stroke="#bdbdbd" width={60} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="ZCOUNT1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
          <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
        </Bar>
        <Bar dataKey="ZCOUNT2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >
          <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
        </Bar>
        <Bar dataKey="ZCOUNT3" stackId="a" fill={colorState[2]} onClick={(data) => getData(data)} >
          <LabelList dataKey="ZCOUNT3" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
        </Bar>
        {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                      {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                      }
                      </Bar>
                      <Bar dataKey="ZCOUNT2" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                      {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                      }
                      </Bar>
                      <Bar dataKey="ZCOUNT3" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
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
        maxBarSize={35}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="2 2" /> */}

        <Tooltip formatter={(value, name, props) => tooltipText(value, name)} wrapperStyle={{ fontFamily: 'Helvetica', fontSize: '10px' }} />
        <Legend iconSize={10} wrapperStyle={{
          fontFamily: 'Helvetica', fontSize: '10px'
        }} formatter={(value, entry, index) => legendText(value)} />
        <XAxis type='number' stroke="#bdbdbd" interval={0} tick={CustomizedAxisTick} />
        <YAxis dataKey="GROUP_DESC1" type="category" stroke="#bdbdbd" width={60} interval={0} tick={CustomizedYAxisTick} />
        <Bar dataKey="ZCOUNT1" stackId="a" fill={colorState[0]} onClick={(data) => getData(data)} >
          <LabelList dataKey="ZCOUNT1" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
        </Bar>
        <Bar dataKey="ZCOUNT2" stackId="a" fill={colorState[1]} onClick={(data) => getData(data)} >
          <LabelList dataKey="ZCOUNT2" position="center" style={{ textAnchor: 'middle', fontSize: '50%', fill: 'white' }} />
        </Bar>

        {/* <Bar dataKey="ZCOUNT1" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                          {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSFIRSTSTACK[index % COLORSFIRSTSTACK.length]} />)
                          }
                          </Bar>
                          <Bar dataKey="ZCOUNT2" stackId="a" fill={'#48C9B0'} onClick={(data)=>getData(data)}>
                          {  data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSSECONDSTACK[index % COLORSSECONDSTACK.length]} />)
                          }
                          </Bar> */}

      </BarChart></ResponsiveContainer>)
  }



  const legendText = (value) => {
    if (value == 'ZCOUNT1') {
      return "Executed Risks"
    }
    if (value == 'ZCOUNT2') {
      return "Non-Executed Risks"
    }
    if (value == 'ZCOUNT3') {
      return "Never Executed Risks"
    }
  }

  const tooltipText = (value, name) => {
    if (name == 'ZCOUNT1') {
      return [value, "Executed Risks",]
    }
    if (name == 'ZCOUNT2') {
      return [value, "Non-Executed Risks"]
    }
    if (name == 'ZCOUNT3') {
      return [value, "Never Executed Risks"]
    }
  }


  const changeGraph = (event) => {
    setChartState(event.target.value)
  }



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getTableHeader = (data, key) => {
    let filtereddata = data.filter(p => p.ZTYPE === key);

    let columnarray = (key == '01') ? ["GROUPBY1", "GROUP_DESC1", "ZCOUNT1", "ZCOUNT2", "ZCOUNT3"] : ["GROUPBY1", "GROUP_DESC1", "ZCOUNT1", "ZCOUNT2"]
    let header = Object.keys(filtereddata[0]).filter(t => columnarray.includes(t)).map(p => {
      if (p == 'GROUPBY1') {
        return 'COLUMN1'
      }
      if (p == 'GROUP_DESC1') {
        return 'COLUMN2'
      }
      if (p == 'ZCOUNT1') {
        return 'COUNT1'
      }
      if (p == 'ZCOUNT2') {
        return 'COUNT2'
      }
      if (p == 'ZCOUNT3') {
        return 'COUNT3'
      }
    })


    let dataset = filtereddata.map(dt => {
      let tem = [];
      tem.push(dt.GROUPBY1)
      tem.push(dt.GROUP_DESC1)
      tem.push(dt.ZCOUNT1)
      tem.push(dt.ZCOUNT2)
      if (key == '01') {
        tem.push(dt.ZCOUNT3)
      }
      return tem;
    })


    let dataset2 = filtereddata.map(dt => {
      let tem = {};
      tem.COLUMN1=dt.GROUPBY1
      tem.COLUMN2=dt.GROUP_DESC1
      tem.COUNT1=dt.ZCOUNT1
      tem.COUNT2=dt.ZCOUNT2
      if (key == '01') {
        tem.COUNT3=dt.ZCOUNT3
      }
      return tem;
    })

    return [header, dataset,dataset2]


  }

  let getData = (data) => {
    console.log(data)
    props.dialogueOpen(props.chartId, data.GROUPBY1)
  }

  const classes = useStyles();
  const [chartState, setChartState] = useState(props.chartType);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [colorState, setColorState] = useState([...COLORS]);
  let getchartDataResult1 = proesResultData(props.data, props.chart);
  let tableData = getTableHeader(props.data, props.chart)
  let firctChart = getChart(getchartDataResult1, chartState, '#00bcd4', props.stack)
  useEffect(() => {
    let arr = [...props.color, ...COLORS]
    setColorState(arr);
  }, []);

  return (
    <div>
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
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                  style={{ height: 20 }}
                  classes={{outlined:classes.rootSelect}}
                >
                  <MenuItem value={1} key='horizontal' style={{ padding: 5 }}><AssessmentOutlinedIcon fontSize="small" style={{ transform: 'rotate(90deg)' }} /></MenuItem>
                  <MenuItem value={2} key='vertical' style={{ padding: 5 }}><AssessmentOutlinedIcon fontSize="small" /></MenuItem>
                  <MenuItem value={3} key='vertical-mul' style={{ padding: 5 }}><BarChartIcon fontSize="small" /></MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <Typography variant="subtitle2" style={{ fontFamily: 'Helvetica' }}>
                {props.name}
              </Typography>

            </Grid>
            <Grid item md={3}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                style={{ padding: 0 }}
                onClick={handleClickOpen}
              >
                <TocIcon />
              </IconButton>
            </Grid>

          </Grid>


        </CardActions>

      </Card>


      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        style={{width:'inherit'}}
      >
        <Grid container spacing={1} style={{width:'100%'}}>
          <Grid item md={11}>
            <DialogTitle style={{ cursor: 'move', maxHeight: 30, fontFamily: 'Helvetica', fontSize: 10 }} id="draggable-dialog-title">

              {` ${props.name} Table`}
            </DialogTitle>
          </Grid>
          <Grid item md={1}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              style={{ padding: 0 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>


        <DialogContent style={{paddingTop:10}}>
        {/* <GRCDashbordTable name={props.name} header={tableData[0]} data={tableData[1]} /> */}
          <GRCReportTable name={props.name} header={tableData[0]} data={tableData[2]} colors={colorState} />
        </DialogContent>

      </Dialog>
    </div>
  );

}

export default withRouter(GRCStackGraphCard)