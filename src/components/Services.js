// Services.js

import React from 'react';
import '../assets/Services.scss';
import { IconeHtml, IconeCss, IconeReact, IconeJs, IconeNode, IconeGithub, IconeMongoDb } from '../img/icone/icone.js';
import Skillbar from './Skillbar.js';



function Services() {
  return (
    <div className='main__services'>
        <h2>Je vous propose MES compétences pour concrétiser VOS projets</h2>
        <div className='services'>
            <div className='skills html'>
                <IconeHtml width={90} height={90} />
                <Skillbar width={'90%'}/>
            </div>
            <div className='skills css'>
                <IconeCss width={90} height={90} />
                <Skillbar width={'80%'}/>
            </div>
            <div className='skills react'>
                <IconeReact width={90} height={90} />
                <Skillbar width={'60%'}/>
            </div>
            <div className='skills js'>
                <IconeJs width={90} height={90} />
                <Skillbar width={'50%'}/>
            </div>
            <div className='skills node'>
                <IconeNode width={90} height={90} />
                <Skillbar width={'40%'}/>
            </div>
            <div className='skills github'>
                <IconeGithub width={90} height={90} />
                <Skillbar width={'50%'}/>
            </div>
            <div className='skills mongodb'>        
                <IconeMongoDb width={90} height={90} />
                <Skillbar width={'70%'}/>
            </div>
        </div>
    </div>
  );
}

export default Services;
