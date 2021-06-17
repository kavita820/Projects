import React,{useState,useEffect} from 'react';
import {Grid,Card,CardContent,Typography,Chip,CircularProgress,Button,Divider} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SendIcon from '@material-ui/icons/Send';

import aa from './3.jpg';
import ab from './7.png';
import ac from './11.png';
import ad from './12.png';
import ae from './13.png';
import af from './14.png';
import ag from './15.png';
import ah from './17.png';

export default function Hodlinfo(){

	const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress <= 0 ? 100 : prevProgress - 1));
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);

	return(
			<div className='back'>
				<Grid container>
					<CardContent/>
					<Grid item xs={3}  className='box'>
								<Typography variant='h3' className='head' >
									<CardContent />
									HODLINFO 
								</Typography>
								<Typography variant='h5' className='sub'>
									Powered by
								</Typography>
								<Typography variant='h5' className='head'>
									Finstreet
								</Typography>
								<CardContent />
							</Grid>	
						
							<CardContent/>
							<CardContent/>
							<CardContent/>
							<Grid item xs={3}>				
								<CardContent />	
								<CardContent />
								<Chip label="INR" icon={<ArrowDropDownIcon />} color="primary" className='rght' />
								<Chip label="BTC" icon={<ArrowDropDownIcon />} color="primary" className='rght' />
								<Chip label="BUY BTC" color="primary" className='rght'/>
								<CardContent />
							</Grid>
							<CardContent/>
							<Grid item xs={1}  className='shft-rght'>
								<CardContent />
								<CircularProgress className='shft-rght' variant="determinate" value={progress} />
							</Grid>
							<Grid item xs={1}>
								<CardContent />
								<Button variant='contained' className='btn'><SendIcon className='ic'/>Connect Telegram</Button>
							</Grid>
							<Grid container>
								<Grid item xs={4} />
								<Grid item xs={3}>
									<Typography variant='h4' className='sub'>
										<center>Best Price to Trade</center>
									</Typography>
								</Grid>
							</Grid>	

					<Grid container>
						<CardContent />
						<Grid item xs={1}>
							<Typography variant='h3' className='head1'>
								<center>0.61%</center>
							</Typography>
							<Typography variant='h5' className='sub'>
								<center>5 Mins</center>
							</Typography>
						</Grid>
						<CardContent />
						<Grid item xs={2}>
							<Typography variant='h3' className='head1'>
								<center>1%</center>
							</Typography>
							<Typography variant='h5' className='sub'>
								<center>1 Hour</center>
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography variant='h1' className='rght1'>
								<center className='rght1'>₹ 28,59,848</center>
							</Typography>
							<Typography variant='h5' className='sub'>
								<center>Average BTC/INR net price including commission</center>
							</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography variant='h3' className='head1'>
								<center>6.51%</center>
							</Typography>
							<Typography variant='h5' className='sub'>
								<center>1 Day</center>
							</Typography>
						</Grid>
						<CardContent />
						<Grid item xs={2}>
							<Typography variant='h3' className='head1'>
								<center>11.36%</center>
							</Typography>
							<Typography variant='h5' className='sub'>
								<center>7 Days</center>
							</Typography>
						</Grid>
					</Grid>

					<Grid item xs={12} className='back'>
					<Card className='img'>
						<img src={aa} />
					</Card>
					</Grid>
					<Grid item xs={1}>
						<Typography variant='h4' className='sub'>
							<center><b>#</b></center>
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h4' className='sub'>
							<center><b>Platform</b></center>
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant='h4' className='sub'>
							<center><b>Last Traded Price</b></center>
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h4' className='sub'>
							<center><b>Buy/Sell Price</b></center>
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h4' className='sub'>
							<center><b>Difference</b></center>
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='h4' className='sub'>
							<center><b>Savings</b></center>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<CardContent>
							<Card className='box1'>
								<Typography className='rght2'>
									<b className='txt'>1</b>
									<img src={ab}  className='sz'/><b className='lft1'>Wazirx</b>
									<b className='lft'>₹ 29,10,750</b>
									<b className='lft'>₹ 29,12,389 / ₹ 29,13,153</b>
									<b className='lft2'>1.65 %</b>
									<b className='lft3'>▼ ₹ 25,641</b>
								</Typography>
							</Card>
							<CardContent/>
							<Card className='box1'>
								<Typography className='rght2'>
									<b className='txt'>2</b>
										<img src={ac}  className='sz1'/>
										<b className='lft4'>₹ 29,15,169</b>
										<b className='lft'>₹ 29,00,260 / ₹ 29,12,974</b>
										<b className='lft2'>2.37 %</b>
										<b className='lft3'>▲ ₹ 67,594</b>
								</Typography>
							</Card>

							<CardContent/>
							<Card className='box1'>
								<Typography className='rght2'>
									<b className='txt'>3</b>
										<img src={ad}  className='sz'/><b className='lft1'>Goitus</b>
										<b className='lf3'>₹ 29,10,750</b>
										<b className='lft'>₹ 29,12,389 / ₹ 29,13,153</b>
										<b className='lft2'>1.93 %</b>
										<b className='lft3'>▲ ₹ 54,885</b>
								</Typography>
							</Card>

							<CardContent/>
							<Card className='box1'>
								<Typography className='rght2'>
									<b className='txt'>4</b>
										<img src={ae}  className='sz'/><b className='lft1'>Colodax</b>
										<b className='lf1'>₹ 25,83,138</b>
										<b className='lft'>₹ 25,75,167 / ₹ 26,08,984</b>
										<b className='lft2'>9.19 %</b>
										<b className='lft3'>▲ ₹ 2,141</b>
								</Typography>
							</Card>

							<CardContent/>
							<Card className='box1'>
								<Typography className='rght2'>
									<b className='txt'>5</b>
										<img src={af}  className='sz1'/>
										<b className='lft4'>₹ 28,90,000</b>
										<b className='lft'>₹ 29,00,000 / ₹ 28,80,100</b>
										<b className='lft2'>0.36 %</b>
										<b className='lft3'>▲ ₹ 63,045</b>
								</Typography>
							</Card>

							<CardContent/>
							<Card className='box1'>
								<Typography className='rght2'>
									<b className='txt'>6</b>
										<img src={ag}  className='sz'/><b className='lft1'>CoinDCX</b>
										<b className='lf2'>₹ 28,91,942</b>
										<b className='lft'>₹ 28,93,849 / ₹ 29,00,390</b>
										<b className='lft2'>1.62 %</b>
										<b className='lft3'>▲ ₹ 46,110</b>
								</Typography>
							</Card>

						</CardContent>
					</Grid>
					<Grid item xs={12}>
						<Card className="crd">
						<Typography variant='h2' className='txt1'>
							India's Most advanced Derivative Exchanges
							<img src={ah} className='img-wd'/>
							<Button variant='contained' className="crd-btn">Register Now to Start Trading</Button>
						</Typography>
						</Card>
					</Grid>
					<CardContent />
					<Divider />

					<Grid item xs={12}>
						<CardContent className="crd1">
							<Typography  className='cpy'>
							Developed By <b className='hglt'>Dikshajain</b>
							</Typography>
							<center><Button variant='outlined' className='fxd'>Add hodlinfo to home screen</Button></center>
						</CardContent>
						
						</Grid>
					
				</Grid>
			
			</div>
	)
}