import React from "react";

// Imports dos componentes usados
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Flex from "./components/Flex";
import SearchItem from "./components/SearchItem";
import SelectedItem from "./components/SelectedItem";
import Footer from "./components/Footer";

// Consts de chamadas para a API
const URL = "https://api.cdnjs.com/libraries?search=";
const CURRENTURL = "https://api.cdnjs.com/libraries/";

interface State {
  value: string;
  url: string;
  data: any;
  currentURL: string;
  currentData: any;
  selectedMode: boolean;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: "",
      url: "",
      data: null,
      currentURL: "",
      currentData: null,
      selectedMode: false
    };
  }

  render() {
    //Seta o valor do input no estado para poder fazer o request dos 5 itens na API chamando uma função
    const SelectItens = async (e: any) => {
      this.setState({ selectedMode: false });
      this.setState({ value: e.target.value }, () => {
        this.setState({ url: URL + this.state.value }, () => {
          getItens();
        });
      });
    };

    // Função usada para fazer o request dos 5 itens
    const getItens = () => {
      fetch(this.state.url)
        .then(req => req.json())
        .then(data => this.setState({ data: data }))
        .catch(erro => console.error(erro));
    };

    //Função usada para setar no estado o item selecionado e fazer seu request
    const CurrentItem: any = async (name: string) => {
      await this.setState({
        currentURL: CURRENTURL + name
      });

      await fetch(this.state.currentURL)
        .then(req => req.json())
        .then(currentData => this.setState({ currentData: currentData }))
        .catch(erro => console.error(erro));

      await this.setState({ selectedMode: true });
    };

    /* Main dentro dela tem uma ternaria que checa se existe algo no estado para fazer o request
      se tiver e não estiver selecionado nada ele faz um map dos 5 primeiros resultado e os mostram,
      se caso estiver algo selecionado ele pega o item selecionado e joga em um componente que o exibe.  
    */

    return (
      <Flex flow="column" justify="space-between">
        <Flex flow="column">
          <Header />
          <Input onChange={SelectItens} placeholder="Type the library name" />
          {this.state.data !== null && !this.state.selectedMode ? (
            this.state.data.results.map((data: any, index: any, i: any) => {
              var ColorBg;

              if (index % 2 === 0 || 0) {
                ColorBg = "#EEEEEE";
              }

              if (
                index < 5 &&
                this.state.value !== "" &&
                !this.state.selectedMode
              ) {
                return (
                  <Flex justify="center">
                    <SearchItem
                      color={ColorBg}
                      text={data.name}
                      onClick={async () => await CurrentItem(data.name)}
                    />
                  </Flex>
                );
              }
            })
          ) : this.state.selectedMode ? (
            <Flex justify="center">
              <SelectedItem
                name={<>{this.state.currentData.name}</>}
                description={<>{this.state.currentData.description}</>}
                homePage={<>{this.state.currentData.homepage}</>}
                repository={<>{this.state.currentData.repository.url}</>}
                version={<>{this.state.currentData.assets[0].version}</>}
                license={<>{this.state.currentData.license}</>}
              />
            </Flex>
          ) : null}
        </Flex>
        <Footer text="Frontend Test • StudioSol • 2019" />
      </Flex>
    );
  }
}

export default App;
