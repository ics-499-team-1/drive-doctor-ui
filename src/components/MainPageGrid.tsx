import { SimpleGrid } from '@chakra-ui/layout'
import MainPageCard from './MainPageCard'

function MainPageGrid() {
    return (
      <>
        <SimpleGrid columns={3} spacing={10} margin="10px">
          <MainPageCard information="Main Card 1" />
          <MainPageCard information="Main Card 2" />
          <MainPageCard information="Main Card 2" />
          <MainPageCard information="Main Card 2" />
        </SimpleGrid>
      </>
    );
}

export default MainPageGrid
