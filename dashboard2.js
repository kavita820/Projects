import React from 'react';
import clsx from 'clsx';
import {Grid,Typography,Button,CircularProgress,LinearProgress,Paper,CardContent,Divider,Badge,List,AppBar,Toolbar} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import CallMadeIcon from '@material-ui/icons/CallMade';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { Charts } from 'chart.js';
import { Line, Doughnut,Pie } from 'react-chartjs-2';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';

import './style2.css';
import aa from './4.png';
const drawerWidth = 50;

const data = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      datasets:[{
        fill: true,
        borderColor: '#883842',
        backgroundColor: '#582d34',
        data:[0,40,50,44,64,67,60,50],
        radius: 6,
        tension:0.5,
    }] 
}

const config = {
  type: 'line',
  data: data,
  options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }            
          }]
        }
  } 
};


  const data1 = {
    labels:['45%','30%','25%'],
    datasets : [{
      // fill: true,
      data:[162,108,90],
      backgroundColor:['#6543b4','#ff5160','#2e9cfe'],
      color:['white','white','white'],
      width:['10%','40%','5%'],
      fontWeight:['20%','10%','40%'],
      hoverOffset: 37
    }]
  }



const config1 = {
  type: 'doughnut',
  data: data1,
  // this.primaryyAxis;
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // whiteSpace: 'nowrap',
    // backgroundColor:'#1f2025',
    // height: '100%'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),

  },
  paper: {
    background: "#1f2025",
    color:'white'
  }









  
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/*<AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            Dashboard
          </Typography>
          <div className={classes.sectionDesktop}>
            <IconButton color ="inherit">
                <NotificationsIcon style={{zoom:'1.5'}} /><Brightness1Icon style={{zoom:'0.5',position:'relative',left:'-15px',top:'-19px',color:'#2c9df9'}} />
            </IconButton>
          </div>
          <Typography variant='h5'>
                Diksha jain
          </Typography>
        </Toolbar>
      </AppBar>*/}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          paper:classes.paper
        }}
      >
        <List className='active'>
            <ListItem button style={{zoom:1.6}}>
              <InboxIcon />
            </ListItem>
        </List>
        <List >
            <ListItem button style={{zoom:1.6}}>
              <InboxIcon />
            </ListItem>
        </List>
        <List >
            <ListItem button style={{zoom:1.6}}>
              <InboxIcon />
            </ListItem>
        </List>
        <List>
            <ListItem button style={{zoom:1.6}}>
              <InboxIcon />
            </ListItem>
        </List>
      </Drawer>




  <main className={classes.content} style={{backgroundColor:'#1f2025'}} >


    <AppBar style={{backgroundColor:'transparent'}} position="static">
      <Toolbar>
        <Typography variant="h4" style={{lineHeight:1}} className={classes.title}>
          Dashboard<br />
          <span style={{fontSize:13,}}>Mon, <span style={{color:'#3c98e5'}}>2 july 2020</span></span>
        </Typography>
        <div className="flot">
            
            <IconButton aria-label="" color="inherit">
              <Badge badgeContent='' color="primary" style={{zoom:'.4'}}>
                <NotificationsIcon style={{zoom:4}} />
              </Badge> &nbsp;&nbsp;
              <Typography variant='h5'>
                Diksha jain
              </Typography>
            </IconButton>



        </div>
      </Toolbar>
    </AppBar>

      <CardContent>
        <div className={classes.toolbar} >
         <div className="flot">
           <Button variant='contained' style={{color:'white',backgroundColor:'#3c98e5',fontSize:'15px'}}>
              <AddIcon/>ADD
            </Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <SearchIcon style={{color:'white',zoom:'1'}} />
            <input variant='outlined' placeholder='Search For Application Here' style={{backgroundColor:'transparent',border:'transparent',fontSize:'12px'}}/>
          </div> 
        </div>
      </CardContent>
          <Grid container style={{backgroundColor:'#1f2025'}} >
            
            <Grid container>
              <Grid item xs={12} lg={3}>
                 <Paper elevation={3} style={{borderRadius:'10px',backgroundColor:'#1f2025'}} >
                  <CardContent>
                    <Typography variant='h4' style={{color:'white'}} >
                      Total Application <MoreHorizIcon style={{position:'absolute',left:'200px',zoom:'2'}} />
                    </Typography><CardContent/>
                    <Typography variant='h3' style={{color:'white'}}>
                      7956 
                    </Typography>{/*<CardContent/>*/}
                    <Typography variant='h5' style={{color:'#7362a2'}}>
                      <CallMadeIcon style={{zoom:'1.5'}} /> 
                      +3.59%
                      <CircularProgress variant="determinate" value={100} style={{color:'#46474b',position:'relative',left:'80px',zoom:'2'}} />
                      <CircularProgress variant="determinate"  value={70} style={{color:'#7362a2',position:'relative',left:'40px',zoom:'2'}} />
                      <Typography variant='h4' style={{position:'relative',left:'245px',top:'-59px'}} >
                        +70%
                      </Typography>
                    </Typography>       
                  </CardContent>
                </Paper>
              </Grid>

              <CardContent/>

              <Grid item xs={12} lg={3}>
                <Paper elevation={3} style={{border:'2px solid #3e3f43',borderRadius:'10px',backgroundColor:'#1f2025'}}>
                  <Paper elevation={3} style={{backgroundColor:'#2e9cfe',borderRadius:'10px',position:'relative',left:'10px',top:'10px'}}>      
                    <CardContent>
                      <Typography variant='h4' style={{color:'white'}} >
                        Shortlisted Candidates <MoreHorizIcon style={{position:'relative',zoom:'2',right:'-30px'}}/>
                      </Typography>
                      <CardContent/>
                      <Typography variant='h3' style={{color:'white'}}>
                        4658
                      </Typography>
                      <Typography variant='h5' style={{color:'white'}}>
                        <CallMadeIcon style={{zoom:'1.5',transform:'rotate(90deg)'}}/> 
                         +30.6%
                         <CircularProgress variant="determinate" value={100} style={{color:'#50abf9',position:'relative',left:'80px',zoom:'2'}} />
                        <CircularProgress variant="determinate" value={60} style={{color:'white',position:'relative',left:'40px',zoom:'2'}} />
                        <Typography variant='h4' style={{position:'relative',left:'245px',top:'-59px'}} >
                        +60%
                        </Typography>
                      </Typography> 
                    </CardContent>
                  </Paper>
                </Paper>
              </Grid>

              {/*<Grid itemx xs={12} lg={3} >
                <Paper elevation={3} style={{backgroundColor:'#2e9cfe',borderRadius:'10px',position:'relative',left:'-335px',top:'15px'}}>      
                  <CardContent>
                    <Typography variant='h4' style={{color:'white'}} >
                      Shortlisted Candidates <MoreHorizIcon style={{position:'absolute',zoom:'2',right:'165px'}}/>
                    </Typography>
                    <CardContent/>
                    <Typography variant='h3' style={{color:'white'}}>
                      4658
                    </Typography>
                    {/*<CardContent/>*/}
                    {/*<Typography variant='h5' style={{color:'white'}}>
                      <CallMadeIcon style={{zoom:'1.5',transform:'rotate(90deg)'}}/> 
                       +30.6%
                       <CircularProgress variant="determinate" value={100} style={{color:'#50abf9',position:'relative',left:'80px',zoom:'2'}} />
                      <CircularProgress variant="determinate" value={60} style={{color:'white',position:'relative',left:'40px',zoom:'2'}} />
                      <Typography variant='h4' style={{position:'relative',left:'245px',top:'-59px'}} >
                      +60%
                      </Typography>
                    </Typography> 
                  </CardContent>
                </Paper>
              </Grid>*/}

              <CardContent/>
              <Grid item xs={12} lg={3}>
                 <Paper elevation={3} style={{backgroundColor:'#1f2025',borderRadius:'10px',backgroundColor:'#1f2025'}}>      
                  <CardContent>
                    <Typography variant='h4' style={{color:'white'}} >
                      Total Application <MoreHorizIcon style={{position:'absolute',zoom:'2',right:'165px'}}/>
                    </Typography>
                    <CardContent/>
                    <Typography variant='h3' style={{color:'white'}}>
                      4658
                    </Typography>
                    {/*<CardContent/>*/}
                    <Typography variant='h5' style={{color:'#b06a75'}}>
                      <CallMadeIcon style={{zoom:'1.5',transform:'rotate(90deg)'}}/> 
                       +30.6%
                       <CircularProgress variant="determinate" value={100} style={{color:'#46474b',position:'relative',left:'80px',zoom:'2'}} />
                      <CircularProgress variant="determinate" value={40} style={{color:'#b06a75',position:'relative',left:'40px',zoom:'2'}} />
                      <Typography variant='h4' style={{position:'relative',left:'245px',top:'-59px'}} >
                      +40%
                      </Typography>
                    </Typography> 
                  </CardContent>
                </Paper>
              </Grid>

              <CardContent/>
              <Grid item xs={12} lg={2}>
                <img src={aa}/>
              </Grid>

            </Grid>

            <CardContent/>

            <Grid container>
              <Grid item xs={6} lg={6}>
                <Paper elevation={3} style={{backgroundColor:'#1f2025'}}>
                  <CardContent/>
                  <Typography variant='h6' style={{color:'white',backgroundColor:'#1f2025'}} >
                    Application Received This Year <b> This Week</b> <CreateNewFolderIcon/> Download Report<MoreVertIcon/>
                  </Typography>
                  <Line data={data} height={100} className='back1'/>
                  <CardContent/> 
                </Paper>   
                <CardContent/> 
              </Grid>
              
              {/*<CardContent/>*/}
              {/*<CardContent/>*/}
              <Grid item xs={3} lg={3}>
                 <Paper elevation={3} style={{backgroundColor:'#1f2025'}}>
                  <CardContent>
                    <CardContent>
                      <CardContent>
                      <Typography variant='h5' style={{color:'white'}}>
                      Total Application
                      </Typography>
                      <CardContent/>
                      <Typography variant='h6' style={{color:'#b3cee7'}} >
                      <Brightness1Icon/> Application
                      <LinearProgress variant='determinate' value={30} className='linear-color'/></Typography>
                      <Typography variant='h6' style={{color:'#3c98e5'}}>
                      <Brightness1Icon/> Shortlisted
                      <LinearProgress variant='determinate' value={70} className='linear-color1' /></Typography>
                      <Typography variant='h6' style={{color:'#f75a59'}} >
                      <Brightness1Icon/> Rejected
                      <LinearProgress className='linear-color2' variant='determinate' value={50}  /></Typography>
                      <Typography variant='h6' style={{color:'#d3c0db'}}>
                      <Brightness1Icon/> On hold
                      <LinearProgress variant='determinate' color='secondary' value={20} className='linear-color3' /></Typography>
                      <Typography variant='h6' style={{color:'#6643b4'}} > 
                      <Brightness1Icon/> Received
                      <LinearProgress variant='determinate'  color='primary' value={80} className='linear-color4' /></Typography>
                      </CardContent>
                    </CardContent>
                  </CardContent>
                  <br/>
                  <br/>
                  {/*<CardContent/>*/}
                </Paper>
              </Grid> 

              
              <Grid item xs={12} lg={3}>
                <Paper elevation={3}  style={{backgroundColor:'#1f2025',borderRadius:'20px'}}>
                  <Typography variant='h4' style={{color:'white'}} >
                      <CardContent> 
                        New Applicants <ChevronRightIcon style={{zoom:'2'}}/>
                      </CardContent>
                    </Typography>
                  <List>
                  <ListItem>
                    <Typography variant='h4' style={{color:'white'}}>
                    <AccountCircleOutlinedIcon style={{zoom:'2'}}/>Rosie Matts<MailOutlineRoundedIcon style={{position:'relative',left:'74px'}}/>
                    <CallRoundedIcon style={{position:'relative',left:'100px'}}/>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant='h4' style={{color:'white'}}>
                    <AccountCircleOutlinedIcon style={{zoom:'2'}}/>James Scott<MailOutlineRoundedIcon style={{position:'relative',left:'70px'}}/>
                    <CallRoundedIcon style={{position:'relative',left:'100px'}}/>
                    </Typography> 
                  </ListItem>
                  <ListItem>
                    <Typography variant='h4' style={{color:'white'}}>
                    <AccountCircleOutlinedIcon style={{zoom:'2'}} />Jamie Laurenson<MailOutlineRoundedIcon style={{position:'relative',left:'25px'}}/>
                    <CallRoundedIcon style={{position:'relative',left:'55px'}}/>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant='h4' style={{color:'white'}}>
                    <AccountCircleOutlinedIcon style={{zoom:'2'}}/>Elizabeth Hurton<MailOutlineRoundedIcon style={{position:'relative',left:'30px'}}/>
                    <CallRoundedIcon style={{position:'relative',left:'60px'}}/>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant='h4' style={{color:'white'}}>
                    <AccountCircleOutlinedIcon style={{zoom:'2'}}/>Danny Watson<MailOutlineRoundedIcon style={{position:'relative',left:'48px'}}/>
                    <CallRoundedIcon style={{position:'relative',left:'80px'}}/>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant='h4' style={{color:'white'}}>
                    <AccountCircleOutlinedIcon style={{zoom:'2'}} />Reha Scarlett<MailOutlineRoundedIcon style={{position:'relative',left:'58px'}}/>
                    <CallRoundedIcon style={{position:'relative',left:'85px'}}/>
                    </Typography> 
                  </ListItem>
                  </List>
                </Paper>
              </Grid>

            </Grid> 

            <Grid container>
              <Grid item xs={10} lg={6}>
                <Paper style={{backgroundColor:'#1f2025'}}>

                  <CardContent>
                    <Typography variant='h5' style={{color:'white'}} >
                      Referrals and Campaign Stats
                      <SendOutlinedIcon className='refer-color' style={{color: '#883842'}} />
                      <Typography className='refer-color1' variant='h6'  > 40 Campaign sent in Total</Typography>
                      <Typography className='refer-color2' variant='h5'>4 Campaign sent in Last Month</Typography>
                    </Typography>
                  </CardContent>

                  <Grid container>
                    <Grid item xs={10} lg={3}>
                      <Paper elevation={3} style={{backgroundColor:'#1f2025'}} >
                        <CardContent>
                         <Typography variant='h6' style={{color:'white'}} >
                           <center> User's Reached</center>
                          </Typography>
                          <CardContent/>
                          <Typography variant='h5' style={{color:'#4e85b5'}}>
                             <center>
                             <CallMadeIcon/>  +3.59%
                              </center>
                          </Typography>
                          <CardContent/>
                          <Typography variant='h3' style={{color:'white'}}>
                             <center> 7956 </center>
                          </Typography>
                        </CardContent>
                     </Paper>
                    </Grid>

                     <Grid item xs={10} lg={3}>
                     <Paper elevation={3} style={{backgroundColor:'#1f2025'}}>
                      <CardContent>
                        <Typography variant='h6' style={{color:'white'}} >
                         <center> Referrals</center>
                        </Typography><CardContent/>
                        <Typography variant='h5' style={{color:'#4e85b5'}}>
                           <center><CallMadeIcon/>   +9.01% </center>
                        </Typography><CardContent/>
                        <Typography variant='h3' style={{color:'white'}}>
                           <center> 0662 </center>
                        </Typography>
                      </CardContent>
                     </Paper>
                    </Grid>

                    <Grid item xs={10} lg={3}>
                      <Paper elevation={3} style={{backgroundColor:'#1f2025'}} >
                        <CardContent>
                          <Typography variant='h6' style={{color:'white'}} >
                            <center> Shares </center>
                          </Typography><CardContent/>
                            <Typography variant='h5' style={{color:'#4e85b5'}}>
                               <center> <CallMadeIcon/>  +39.18% </center>
                            </Typography><CardContent/>
                            <Typography variant='h3' style={{color:'white'}}>
                               <center> 1478 </center>
                            </Typography>
                          </CardContent>
                       </Paper>
                    </Grid>

                    <Grid item xs={10} lg={3}>
                      <Paper elevation={3} style={{backgroundColor:'#1f2025'}}>
                        <CardContent>
                          <Typography variant='h6' style={{color:'white'}} >
                            <center> Applications</center>
                          </Typography><CardContent/>
                          <Typography variant='h5' style={{color:'#4e85b5'}} >
                             <center> <CallMadeIcon/>  +12.00% </center>
                          </Typography><CardContent/>
                          <Typography variant='h3' style={{color:'white'}}>
                             <center> 0564 </center>
                          </Typography>
                        </CardContent>
                      </Paper>
                    </Grid>
                    <br/>
                    <Button variant='contained' style={{backgroundColor:'#2e9cfe',color:'white',width:'40%',fontSize:'14px'}} ><CardContent/>Start a New Campaign now</Button>
                    <CardContent/>
                    <Button variant='contained' style={{backgroundColor:'#ff515f',color:'white',width:'40%',fontSize:'14px'}} >Pause All Running Campaigns</Button>
                  </Grid>
                </Paper>
              </Grid>

              {/*<CardContent/>
              <CardContent/>*/}

              <Grid item xs={10} lg={3}>
                <Paper elevation={3} style={{color:'white',backgroundColor:'#1f2025'}} >
                  <CardContent>
                    <Typography variant='h5'>
                      Open Positions By Department<MoreHorizIcon style={{marginLeft:'55px',zoom:'1.5'}} />
                      <Doughnut data={data1} height={160} className='back1'/>
                      <Typography style={{fontSize:'14px',position:'relative',left:'110px',top:'-150px'}}>
                      Open Positions
                      </Typography>
                    </Typography>
                  </CardContent>
                </Paper>
              </Grid>

            </Grid>

        </Grid>
      </main>
    </div>
  );
}