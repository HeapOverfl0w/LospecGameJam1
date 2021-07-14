import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {Button, Grid, MenuItem, Paper, Select, TextField, Tooltip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DetailsIcon from '@material-ui/icons/Details';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 16,
    width: 16,
  },
}));

const lcolors = [
  'white',
  'blue',
  'cyan',
  'green',
  'lime',
  'yellow',
  'goldenrod',
  'orange',
  'orangered',
  'red',
  'maroon',
  'purple',
  'indigo',
  'black'
]

const textures = [
  "enemyturret", 
  "enemyturretdestroyed", 
  "enemyturretattack", 
  "computerdesk", 
  "pottedplant", 
  "drywall", 
  "trashcan", 
  "couch", 
  "sparks",
  "defaultScrewDriver", 
  "attackScrewDriver", 
  "brick", 
  "billboards", 
  "floors", 
  "skybox",
  "enemyshot",
  "pistolpowerup",
  "bulletprojectile",
  "attackPistol",
  "defaultPistol",
  "ammopowerup",
  "healthpowerup",
  "vent",
  "cobblestone",
  "cobblestonetall",
  "fireaxe",
  "fireaxeattack",
  "fireaxepowerup",
  "bluesparks",
  "npc_melee_attack",
  "npc_melee_move",
  "ar",
  "arattack",
  "arreload",
  "arpowerup",
  "carpet",
  "wallpaper",
  "brickwindow",
  "ceilingDryWall",
  "wallpaperdoor",
  "wallpapervent",
  "elevatordoors",
  "pistolreload",
  "deaddude",
  "fridge",
  "comfychair",
  "tv",
  "bed",
  "endtable",
  "statue",
  "enemyrangedmove",
  "enemyrangeddeath",
  "enemyrangedattack"
];

function App() {
  const classes = useStyles();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rows, setRows] = useState([]);
  const [layer, setLayer] = useState('floor');
  const [tile, setTile] = useState(0);
  const [billboard, setBillboard] = useState('');
  const [update, setUpdate] = useState(false);

  const updateHeight = function(e) {
    let temp = rows;

    while(temp.length < e.target.value) {
      let defRow = [];
      for (let i = 0; i < width; i++) {
        defRow.push({billboard: '', wall: 0, floor: 0, ceiling: 0 });
      }

      temp.push({columns: defRow});
    }

    while(temp.length > e.target.value) {
      temp.pop();
    }
    setRows(temp);
    setHeight(e.target.value);
  }

  const updateWidth = function(e) {
    let temp = rows;

    temp.forEach(row => {
      while(row.columns.length < e.target.value) {
        row.columns.push({billboard: '', wall: 0, floor: 0, ceiling: 0 });
      }

      while(row.columns.length > e.target.value) {
        row.columns.pop();
      }
    });
    setRows(temp);
    setWidth(e.target.value);
  }

  const updateTile = function(e) {
    setTile(e.target.value);
  }

  const switchLayer = function(e) {
    setLayer(e.target.value);
  }

  const switchBillboard = function(e) {
    setBillboard(e.target.value);
  }

  const updateLevel = function(i, j, value) {
    let temp = rows;
    temp[i].columns[j][layer] = value;
    setRows(temp);
    setUpdate(!update);
  }

  const generate = function() {
    let w = [];
    let c = [];
    let f = [];
    let b = [];

    for (let i = 0; i < rows.length; i++){
      let wr = [];
      let cr = [];
      let fr = [];
      let br = [];
      for (let j = 0; j < rows[i].columns.length; j++) {
        wr.push(rows[i].columns[j]['wall']);
        cr.push(rows[i].columns[j]['ceiling']);
        fr.push(rows[i].columns[j]['floor']);
        if (rows[i].columns[j]['billboard']) {
          br.push({type: rows[i].columns[j]['billboard'], x: j, y: i});
        }
      }
      w.push(wr);
      c.push(cr);
      f.push(fr);
      b.push(br);
    }

    let element1 = document.createElement("a");
    let wf = new Blob([JSON.stringify(w)], {type: 'text/plain'});
    element1.href = URL.createObjectURL(wf);
    element1.download = "walls.json";
    document.body.appendChild(element1); 
    element1.click();

    let element2 = document.createElement("a");
    let cf = new Blob([JSON.stringify(c)], {type: 'text/plain'});
    element2.href = URL.createObjectURL(cf);
    element2.download = "ceiling.json";
    document.body.appendChild(element2); 
    element2.click();

    let element3 = document.createElement("a");
    let ff = new Blob([JSON.stringify(f)], {type: 'text/plain'});
    element3.href = URL.createObjectURL(ff);
    element3.download = "floor.json";
    document.body.appendChild(element3); 
    element3.click();

    let element4 = document.createElement("a");
    let bf = new Blob([JSON.stringify(b)], {type: 'text/plain'});
    element4.href = URL.createObjectURL(bf);
    element4.download = "billboards.json";
    document.body.appendChild(element4); 
    element4.click();
  }

  return (
    <div className="App">
      <div style={{width: '100%' }}>
        <Select
          value={layer}
          style={{verticalAlign:'bottom'}}
          onChange={(e) => switchLayer(e)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'floor'}>Floor</MenuItem>
          <MenuItem value={'wall'}>Walls</MenuItem>
          <MenuItem value={'ceiling'}>Ceiling</MenuItem>
          <MenuItem value={'billboard'}>Billboards</MenuItem>
        </Select>  
        <TextField
          label="Height"
          type="number"
          value={height}
          onChange={(e) => updateHeight(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Width"
          type="number"
          value={width}
          onChange={(e) => updateWidth(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        { layer !== 'billboard' &&
          <TextField
            label="Tile"
            type="number"
            value={tile}
            onChange={(e) => updateTile(e)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
        { layer === 'billboard' &&
          <Select
            value={billboard}
            style={{verticalAlign:'bottom'}}
            onChange={(e) => switchBillboard(e)}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={''}>None</MenuItem>
            {
              textures.map((texture, i) => (
                <MenuItem key={i} value={texture}>{texture}</MenuItem>
              ))
            }
          </Select>
        }
      </div>
      <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          { rows.map((row, i) => (
            <Grid key={i} container spacing={0}>
              <Grid item xs={12}>
                  <Grid  container justifyContent="center" spacing={0}>
                    {row.columns.map((column, j) => (
                      <Grid key={j} item>
                        { layer !== 'billboard' &&
                          <Paper square className={classes.paper} style={{backgroundColor: lcolors[rows[i].columns[j][layer]]}} onClick={() => updateLevel(i, j, Number(tile))}/>
                        }
                        { layer === 'billboard' &&
                          <Paper square className={classes.paper} style={{backgroundColor: lcolors[rows[i].columns[j]['wall']]}} onClick={() => updateLevel(i, j, billboard)}>
                            {column[layer] &&
                              <Tooltip title={column[layer]}>
                                <DetailsIcon style={{display: 'block', fontSize: 'medium'}}/>
                              </Tooltip>
                            }
                          </Paper>
                        }
                      </Grid>
                    ))}
                  </Grid>
              </Grid>
            </Grid>
          ))}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
          { lcolors.map((color, i) => (
            <Paper style={{backgroundColor: color, color: 'white'}}>{i}</Paper>
          ))}
        </div>
      </div>

      <Button onClick={() => generate()}>
        Generate
      </Button>
    </div>
  );
}

export default App;
