import React from 'react';
import classes from './history.module.css'
var HistoryComponent = props =>{
    return(
        <div className={classes.historyPart}>
        <h2>{props.title}</h2>
        <p>Dialga y Palkia para controlar el tiempo y el espacio.. Después Arceus creó a Giratina como mediador para detener las luchas entre éstos dos. Posteriormente creó a Jirachi que estableció las estrellas y el firmamento, aunque más tarde éste también quiso conceder a personas y Pokémon, sus afables deseos si el cometa milenario es visto por humanos en el cielo nocturno. Una vez creada la luz gracias a Jirachi, al instante se pudo ver a Darkrai de la sombra de Arceus. Arceus pensó dar al universo que estaba creando un toque místico, por lo que creó a Cresselia, el cual fue el primer Pokémon con sentimientos como la compasión, afecto, piedad, ternura, dolor, tristeza, delicadeza, pasión, etc. Éste, debido a sus sentimientos, deseó tener ayuda y compañía, por lo que creó el trío legendario formado por Uxie, Mesprit y Azelf. Este trío legendario se encargaría más tarde de dotar a los seres vivos de sentimientos como la emoción, sabiduría y voluntad, características básicas que representan a cada uno de ellos, respectivamente. Darkrai nació justo cuando Arceus nació, casi al momento, pero no se dejó ver hasta que la luz fue creada.</p>
    </div>
    );
}

export default HistoryComponent;