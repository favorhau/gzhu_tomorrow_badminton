import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Head from 'next/head';
import Image from 'next/image'
import { Link, Typography} from '@mui/material';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
        <Head>
        <title>Q&A</title>
        <meta name="description" content="GZHU Tomorrow Badminton Q&A" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>????????????Cookie #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'orange'}}>
            ?????????????????????Cookie??????????????????????????????????????????????????????Cookie??????????????????????????????????????????Cookie??????????????????????????????????????????????????????????????????????????????????????????
          </Typography>
          <Typography >
            1. ???????????????(??????Chrome)??????<Link href={'https://usc.gzhu.edu.cn/infoplus/form/TYCDYY/start'}>https://usc.gzhu.edu.cn/infoplus/form/TYCDYY/start</Link>?????????????????????????????????
          </Typography>
          <Typography >
            2. ??????????????????????????????Network??????????????????<Link href={'https://jingyan.baidu.com/article/a3aad71aca6a8ef0fb0096c1.html'}>???????????????????????????</Link>
          </Typography>
          <Image src={'/help/internet.png'} alt={""} width={680} height={300}></Image>
          <Typography >
            3. ??????????????????????????????start????????????????????????Request Headers????????????Cookie
          </Typography>
          <Image src={'/help/Cookie.png'} alt={""} width={680} height={300}></Image>
          <Typography >
            4. ??????Cookie???????????????????????????????????????
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>??????????????????????????????????????? #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ???????????????????????????????????????<b>??????12:30</b>?????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Typography>
          <Image src={'/help/clockTime.png'} alt={""} width={440} height={100}></Image>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>????????????????????????????????? #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ????????????????????????????????????
            <Link href={'https://usc.gzhu.edu.cn/taskcenter/'}>https://usc.gzhu.edu.cn/taskcenter/</Link>????????????????????????
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????
            ??????????????????????????????
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>??????????????? #4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ????????????????????????????????????????????????????????????????????????????????????????????????<b>00:00-08:00</b> ?????????????????????????????????????????????????????????????????????????????????
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>???????????? #5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ??????????????????GZHU ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            
            ??????????????????????????? <Link type='email'>favorhau@outlook.com</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
