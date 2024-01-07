import { useState, createContext } from "react";
import { Theme } from "@twilio-paste/core/theme";
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';

import Sidebar from "./Components/Sidebar.js";
import Home from "./Pages/Home/index.js";
import { SidebarPushContentWrapper } from "@twilio-paste/core";

const AppContext = createContext(null);

function App() {
  const [page, changePage] = useState(<Home AppContext={AppContext} />);

  return (
    <AppContext.Provider value={{changePage}}>
      <Theme.Provider theme="default">
        <Flex>
          <Box>
            <Sidebar AppContext={AppContext} />
          </Box>
          <Box width="100%">
            <SidebarPushContentWrapper collapsed={false} variant="default">
              {page}
            </SidebarPushContentWrapper>
          </Box>
        </Flex>
      </Theme.Provider>
    </AppContext.Provider>
  );
}

export default App;