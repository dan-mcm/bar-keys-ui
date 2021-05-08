import React, { Component } from 'react';

class Generator extends Component {
  constructor(props){
    super(props);
    this.state = {
      samplevalue: 'a'
    };

    this.handleChange = this.handleChange.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
  }

  handleChange(event) {
    this.setState({samplevalue: event.target.samplevalue});
    console.log(event.target.value)
  }

  downloadFile = () => {
    // currently this only works with default samplevalue state, on update its marked undefined
    console.log(`DEBUG; ${this.state.samplevalue}`)
    const element = document.createElement("a");
    // todo: add in function for formatting the text based on the state of various values added
    const file = new Blob([this.state.samplevalue], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "uikeys.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

// abstracted out from uikeys.tmp -> sorting by faction
  // // Armada Structures
  // bind                  c  buildunit_armllt      // LLT - Light Laser Tower. Transportable (Heavy)
  // bind                  c  buildunit_armrad      // Radar Tower - Early Warning System. Transportable (Heavy)
  // bind                  c  buildunit_armrl       // Defender - Light Anti-air Tower. Transportable (Heavy)
  // bind                  c  buildunit_armpb       // Pit Bull - Pop-up Gauss Cannon
  // bind                  c  buildunit_armflak     // Flakker - Anti-Air Flak Gun
  // bind                  c  buildunit_armgplat    // Gun Platform - Light Plasma Defense
  // bind                  c  buildunit_armtl       // Harpoon - Offshore Torpedo Launcher
  // bind                  c  buildunit_armsonar    // Sonar Station - Locates Water Units
  // bind                  c  buildunit_armfrad     // Floating Radar/Sonar Tower - Early Warning System
  // bind                  c  buildunit_armfrt      // Sentry - Floating Anti-air Tower
  // bind            shift+z  buildunit_armmex      // Metal Extractor - Extracts Metal from Metalspots
  // bind            shift+z  buildunit_armamex     // Twilight - Stealthy Cloakable Metal Extractor
  // bind            shift+z  buildunit_armmoho     // Moho Mine - Advanced Metal Extractor / Storage
  // bind            shift+z  buildunit_armuwmex    // Offshore Metal Extractor - Extracts Metal
  // bind            shift+z  buildunit_armuwmme    // Underwater Moho Mine - Advanced Metal Extractor / Storage
  // bind                  v  buildunit_armnanotc   // Nano Turret - Assist & Repair in large radius. Transportable
  // bind                  v  buildunit_armnanotcplat  // Nano Turret - Repairs and builds in large radius
  // bind                  v  buildunit_armlab      // Bot Lab - Produces Level 1 Bots
  // bind                  v  buildunit_armvp       // Vehicle Plant - Produces Level 1 Vehicles
  // bind                  v  buildunit_armap       // Aircraft Plant - Produces Level 1 Aircraft
  // bind                  v  buildunit_armsy       // Shipyard - Produces Level 1 Ships
  // bind                  x  buildunit_armsolar    // Solar Collector - Produces 20 Energy
  // bind                  x  buildunit_armwin      // Wind Generator - Produces Energy. Depends on wind strength.
  // bind                  x  buildunit_armadvsol   // Advanced Solar Collector - Produces 75 Energy
  // bind                  x  buildunit_armfus      // Fusion Reactor - Produces 1000 Energy
  // bind                  x  buildunit_armmmkr     // Advanced Energy Converter - Converts 600 energy into 10.3 metal
  // bind                  x  buildunit_armtide     // Tidal Generator - Produces Energy (depends on map)
  // bind                  x  buildunit_armuwfus    // Underwater Fusion Plant - Produces 1200 Energy
  // bind                  x  buildunit_armuwmmm    // Floating Adv. Energy Converter - Converts 650 energy into 11 metal per sec
  // bind            shift+c  buildunit_armllt      // LLT - Light Laser Tower. Transportable (Heavy)
  // bind            shift+c  buildunit_armrad      // Radar Tower - Early Warning System. Transportable (Heavy)
  // bind            shift+c  buildunit_armrl       // Defender - Light Anti-air Tower. Transportable (Heavy)
  // bind            shift+c  buildunit_armpb       // Pit Bull - Pop-up Gauss Cannon
  // bind            shift+c  buildunit_armflak     // Flakker - Anti-Air Flak Gun
  // bind            shift+c  buildunit_armgplat    // Gun Platform - Light Plasma Defense
  // bind            shift+c  buildunit_armtl       // Harpoon - Offshore Torpedo Launcher
  // bind            shift+c  buildunit_armsonar    // Sonar Station - Locates Water Units
  // bind            shift+c  buildunit_armfrad     // Floating Radar/Sonar Tower - Early Warning System
  // bind            shift+c  buildunit_armfrt      // Sentry - Floating Anti-air Tower
  // bind                  z  buildunit_armmex      // Metal Extractor - Extracts Metal from Metalspots
  // bind                  z  buildunit_armamex     // Twilight - Stealthy Cloakable Metal Extractor
  // bind                  z  buildunit_armmoho     // Moho Mine - Advanced Metal Extractor / Storage
  // bind                  z  buildunit_armuwmex    // Offshore Metal Extractor - Extracts Metal
  // bind                  z  buildunit_armuwmme    // Underwater Moho Mine - Advanced Metal Extractor / Storage
  // bind            shift+v  buildunit_armnanotc   // Nano Turret - Assist & Repair in large radius. Transportable
  // bind            shift+v  buildunit_armnanotcplat  // Nano Turret - Repairs and builds in large radius
  // bind            shift+v  buildunit_armlab      // Bot Lab - Produces Level 1 Bots
  // bind            shift+v  buildunit_armvp       // Vehicle Plant - Produces Level 1 Vehicles
  // bind            shift+v  buildunit_armap       // Aircraft Plant - Produces Level 1 Aircraft
  // bind            shift+v  buildunit_armsy       // Shipyard - Produces Level 1 Ships
  // bind            shift+x  buildunit_armsolar    // Solar Collector - Produces 20 Energy
  // bind            shift+x  buildunit_armwin      // Wind Generator - Produces Energy. Depends on wind strength.
  // bind            shift+x  buildunit_armadvsol   // Advanced Solar Collector - Produces 75 Energy
  // bind            shift+x  buildunit_armfus      // Fusion Reactor - Produces 1000 Energy
  // bind            shift+x  buildunit_armmmkr     // Advanced Energy Converter - Converts 600 energy into 10.3 metal
  // bind            shift+x  buildunit_armtide     // Tidal Generator - Produces Energy (depends on map)
  // bind            shift+x  buildunit_armuwfus    // Underwater Fusion Plant - Produces 1200 Energy
  // bind            shift+x  buildunit_armuwmmm    // Floating Adv. Energy Converter - Converts 650 energy into 11 metal per sec

  // // Cortex Structures
  // bind                  c  buildunit_corllt      // LLT - Light Laser Tower. Transportable (Heavy)
  // bind                  c  buildunit_corrad      // Radar Tower - Early Warning System. Transportable (Heavy)
  // bind                  c  buildunit_corrl       // Pulverizer - Light Anti-air Tower. Transportable (Heavy)
  // bind                  c  buildunit_corvipe     // Viper - Pop-up Sabot Battery
  // bind                  c  buildunit_corflak     // Cobra - Anti-Air Flak Gun
  // bind                  c  buildunit_corgplat    // Gun Platform - Light Plasma Defense
  // bind                  c  buildunit_cortl       // Urchin - Offshore Torpedo Launcher
  // bind                  c  buildunit_corsonar    // Sonar Station - Locates Water Units
  // bind                  c  buildunit_corfrad     // Floating Radar/Sonar Tower - Early Warning System
  // bind                  c  buildunit_corfrt      // Stinger - Floating Anti-air Tower
  // bind            shift+z  buildunit_cormex      // Metal Extractor - Extracts Metal from Metalspots
  // bind            shift+z  buildunit_corexp      // Exploiter - Armed Metal Extractor
  // bind            shift+z  buildunit_cormoho     // Moho Mine - Advanced Metal Extractor / Storage
  // bind            shift+z  buildunit_cormexp     // Moho Exploiter - Armed Moho Metal Extractor
  // bind            shift+z  buildunit_coruwmex    // Offshore Metal Extractor - Extracts Metal
  // bind            shift+z  buildunit_coruwmme    // Underwater Moho Mine - Advanced Metal Extractor / Storage
  // bind                  v  buildunit_cornanotcplat  // Nano Turret - Repairs and builds in large radius
  // bind                  v  buildunit_cornanotc   // Nano Turret - Assist & Repair in large radius. Transportable
  // bind                  v  buildunit_corlab      // Bot Lab - Produces Level 1 Bots
  // bind                  v  buildunit_corvp       // Vehicle Plant - Produces Level 1 Vehicles
  // bind                  v  buildunit_corap       // Aircraft Plant - Produces Level 1 Aircraft
  // bind                  v  buildunit_corsy       // Shipyard - Produces Level 1 Ships
  // bind                  x  buildunit_corsolar    // Solar Collector - Produces 20 Energy
  // bind                  x  buildunit_corwin      // Wind Generator - Produces Energy. Depends on wind strength.
  // bind                  x  buildunit_coradvsol   // Advanced Solar Collector - Produces 75 Energy
  // bind                  x  buildunit_corfus      // Fusion Reactor - Produces 1100 Energy
  // bind                  x  buildunit_cormmkr     // Advanced Energy Converter - Converts 600 energy into 10.3 metal per sec
  // bind                  x  buildunit_cortide     // Tidal Generator - Produces Energy (depends on map)
  // bind                  x  buildunit_coruwfus    // Underwater Fusion Plant - Produces 1220 Energy
  // bind                  x  buildunit_coruwmmm    // Floating Adv. Energy Converter - Converts 650 energy into 11 metal per sec
  // bind            shift+c  buildunit_corllt      // LLT - Light Laser Tower. Transportable (Heavy)
  // bind            shift+c  buildunit_corrad      // Radar Tower - Early Warning System. Transportable (Heavy)
  // bind            shift+c  buildunit_corrl       // Pulverizer - Light Anti-air Tower. Transportable (Heavy)
  // bind            shift+c  buildunit_corvipe     // Viper - Pop-up Sabot Battery
  // bind            shift+c  buildunit_corflak     // Cobra - Anti-Air Flak Gun
  // bind            shift+c  buildunit_corgplat    // Gun Platform - Light Plasma Defense
  // bind            shift+c  buildunit_cortl       // Urchin - Offshore Torpedo Launcher
  // bind            shift+c  buildunit_corsonar    // Sonar Station - Locates Water Units
  // bind            shift+c  buildunit_corfrad     // Floating Radar/Sonar Tower - Early Warning System
  // bind            shift+c  buildunit_corfrt      // Stinger - Floating Anti-air Tower
  // bind                  z  buildunit_cormex      // Metal Extractor - Extracts Metal from Metalspots
  // bind                  z  buildunit_corexp      // Exploiter - Armed Metal Extractor
  // bind                  z  buildunit_cormoho     // Moho Mine - Advanced Metal Extractor / Storage
  // bind                  z  buildunit_cormexp     // Moho Exploiter - Armed Moho Metal Extractor
  // bind                  z  buildunit_coruwmex    // Offshore Metal Extractor - Extracts Metal
  // bind                  z  buildunit_coruwmme    // Underwater Moho Mine - Advanced Metal Extractor / Storage
  // bind            shift+v  buildunit_cornanotcplat  // Nano Turret - Repairs and builds in large radius
  // bind            shift+v  buildunit_cornanotc   // Nano Turret - Assist & Repair in large radius. Transportable
  // bind            shift+v  buildunit_corlab      // Bot Lab - Produces Level 1 Bots
  // bind            shift+v  buildunit_corvp       // Vehicle Plant - Produces Level 1 Vehicles
  // bind            shift+v  buildunit_corap       // Aircraft Plant - Produces Level 1 Aircraft
  // bind            shift+v  buildunit_corsy       // Shipyard - Produces Level 1 Ships
  // bind            shift+x  buildunit_corsolar    // Solar Collector - Produces 20 Energy
  // bind            shift+x  buildunit_corwin      // Wind Generator - Produces Energy. Depends on wind strength.
  // bind            shift+x  buildunit_coradvsol   // Advanced Solar Collector - Produces 75 Energy
  // bind            shift+x  buildunit_corfus      // Fusion Reactor - Produces 1100 Energy
  // bind            shift+x  buildunit_cormmkr     // Advanced Energy Converter - Converts 600 energy into 10.3 metal per sec
  // bind            shift+x  buildunit_cortide     // Tidal Generator - Produces Energy (depends on map)
  // bind            shift+x  buildunit_coruwfus    // Underwater Fusion Plant - Produces 1220 Energy
  // bind            shift+x  buildunit_coruwmmm    // Floating Adv. Energy Converter - Converts 650 energy into 11 metal per sec

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Command</th>
            <th>Hotkey</th>
          </tr>
          <tr>
            <th style={{backgroundColor:"lightblue"}}>Armada Structures</th>
          </tr>
          <tr>
            <td>
              Sample Command
            </td>
            <td>
              <input type="text" onChange={this.handleChange} />
            </td>
          </tr>
          <tr>
            <th style={{backgroundColor:"pink"}}>Cortex Structures</th>
          </tr>
          <tr>
            <td>
              Sample Command
            </td>
            <td>
              <input type="text" onChange={this.handleChange} />
            </td>
          </tr>
        </table>
        <br/>
        <button onClick={this.downloadFile}>Download</button>
      </div>
    );
  }
}

export default Generator;
