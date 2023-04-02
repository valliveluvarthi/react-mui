import PropTypes from 'prop-types';
import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';
import General from './General';
import WebLoginFields from './WebLoginFields';
import GeneralAccess from './GeneralAccess';
import POMAccess from './POMAccess';




// ----------------------------------------------------------------------




TabContent.propTypes = {

    passCurrentTab: PropTypes.func,

    variant: PropTypes.any,

};




export default function TabContent({ passCurrentTab, variant }) {

    const [currentTab, setCurrentTab] = useState('Web Login Fields');

    const [TABS, setTabs] = useState([]);




    useEffect(() => {

        const TABS = [

            {

                value: 'General',
                component: <General />,
                label: 'General',

            },

            {

                value: 'Web Login Fields',
                component: <WebLoginFields />,
                label: 'Web Login Fields',

            },

            {

                value: 'General Access',
                component: <GeneralAccess />,
                label: 'General Access',

            },

            {

                value: 'POM Access',
                component: <POMAccess />,
                label: 'POM Access',

            },

        ];

        setTabs(TABS);

    }, [variant]);




    return (

        <>

            <Box sx={{ pl: 1, fontSize: '14px' }}>

                <Tabs

                    value={currentTab}

                    onChange={(event, newValue) => {

                        setCurrentTab(newValue);

                        passCurrentTab(newValue);

                    }}

                    sx={{

                        px: 3,

                        '&.MuiTabs-root': {

                            p: 0,

                        },

                    }}

                >

                    {TABS.map((tab) => (

                        <Tab key={tab.value} value={tab.value} label={tab.label} />

                    ))}
                </Tabs>
                {TABS.map(
                    (tab) =>
                        tab.value === currentTab && (
                            <Box key={tab.value} sx={{ mt: 5 }}>
                                {tab.component}
                            </Box>
                        )
                )}

            </Box>

        </>

    );

}




// ----------------------------------------------------------------------