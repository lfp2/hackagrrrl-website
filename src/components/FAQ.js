import React, { Component } from 'react';
import { Accordion, Icon, Header } from "semantic-ui-react";

export default class FAQ extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render() {
        const { activeIndex } = this.state
        return (
            <React.Fragment>
                <Header as='h1'>FAQ</Header>
                <Accordion fluid styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Onde e quando será o evento?
          </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>Na Apolo 235, dia 14 a 16 de junho.</p>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Pessoas fora de computação podem participar?
          </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>Sim, queremos diversidade nos times. Pessoas de Design, Administração e outras áreas serão muito bem-vindas.</p>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Qual o nível de experiência necessário?
          </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>Pessoas de todos os níveis de experiência serão chamadas - desde que estejam no ensino superior e sejam maiores de 18 anos.</p>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Homens podem participar?
          </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <p>Claro, encorajar as mulheres na área de TI é bastante importante e para isso, deve haver diálogo da parte deles também. Porém, a prioridade vão ser as Minas.</p>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Dormir no evento é obrigatório?
          </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                        <p>Não, porém recomendamos já que teremos atividades especiais na madrugada e haverá banheiros com chuveiro para higiene.</p>
                    </Accordion.Content>
                    <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        Qual será o tema?
          </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5}>
                        <p> O tema do hackathon será divulgado no dia do evento.</p>
                    </Accordion.Content>
                </Accordion>
            </React.Fragment>
        )
    }
}