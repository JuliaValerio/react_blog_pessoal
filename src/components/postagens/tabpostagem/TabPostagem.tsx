import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import "./tabPostagens.css"


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value} >
        <AppBar position="static">
          <Tabs centered style={{ backgroundColor: '#aa5ca5', color: '#FFF' }} onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">

          <Typography className="body1" variant="h5" gutterBottom color="textPrimary" component="h5" align="center">Bem-vindo ao meu blog pessoal!</Typography>
          <Typography className="body1" variant="body1" gutterBottom color="textPrimary" align="justify">Meu nome é Julia, e estou animado em compartilhar minhas paixões, conhecimentos e experiências com você neste espaço virtual. Aqui, busco criar um ambiente acolhedor, onde podemos explorar juntos uma variedade de tópicos, desde tecnologia e viagens até arte e estilo de vida.
          </Typography>
          <Typography className="body1" variant="body1" gutterBottom color="textPrimary" align="justify">
            Desde que descobri o fascinante mundo do desenvolvimento web, tenho me dedicado a aprimorar minhas habilidades em React, uma das bibliotecas mais populares para construir interfaces de usuário interativas. Este blog pessoal serve como um espaço onde posso aplicar meu conhecimento e compartilhar meu progresso com você.
          </Typography>
          <Typography className="body1" variant="body1" gutterBottom color="textPrimary" align="justify">
          Acredito firmemente no poder da aprendizagem contínua e no compartilhamento de informações. Aqui, você encontrará tutoriais, dicas e truques relacionados a desenvolvimento web, especialmente focados em React. Espero que esses recursos possam ser úteis para você, quer você seja um iniciante ou um desenvolvedor experiente.
          </Typography>
          
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;