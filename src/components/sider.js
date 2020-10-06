
import './sider.css';
import React, { Component } from 'react';
import { Button, Menu } from 'antd';
import { HomeOutlined, ThunderboltOutlined, UploadOutlined, AppstoreOutlined, LayoutOutlined, PieChartOutlined, SafetyCertificateOutlined, GlobalOutlined, ExpandAltOutlined, SolutionOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


class Sider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actives: [],
            mode: false
        };
    }


    handleClick = e => {
        console.log('click ', e);
    };

    submenuChange = keys => {
        this.setState({
            actives: keys
        })
    }

    showcollaapse = () => {
        this.setState({
            actives: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'],
            mode: true
        });
    }

    hidecollapse = () => {
        this.setState({
            actives: [],
            mode: false
        });
    }



    render() {
        const { actives, mode } = this.state;

        return (
            <div className="sidebar">
                { mode ?
                    <Button type="text" onClick={this.hidecollapse}>Collapse All</Button > :
                    <Button type="text" onClick={this.showcollaapse}>Expand All</Button >
                }
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={[]}
                    openKeys={actives}
                    forceSubMenuRender={true}
                    mode="inline"
                    onOpenChange={this.submenuChange}
                >
                    <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <ThunderboltOutlined />
                                <span>Getting Started</span>
                            </span>
                        }
                    >
                        <Menu.Item key="sub11">What is Algolia?</Menu.Item>
                        <Menu.Item key="sub12">How Algolia works</Menu.Item>
                        <Menu.Item key="sub13">Quick start</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<UploadOutlined />} title="Sending And Managing Data">
                        < Menu.Item key="sub21">Format and structure your data</Menu.Item>
                        <Menu.Item key="sub22">Send and update your data</Menu.Item>
                        <Menu.Item key="sub23">Manage your indices</Menu.Item>
                        <Menu.Item key="sub24">Manage your application environment</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <AppstoreOutlined />
                                <span>Managing Results</span>
                            </span>
                        }
                    >
                        <Menu.Item key="sub31">Relevance overview</Menu.Item>
                        <Menu.ItemGroup key="sub3g1" title="MUST DO">
                            <Menu.Item key="sub3g11">Searchable attributes</Menu.Item>
                            <Menu.Item key="sub3g12">Custom ranking</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub3g2" title="REFINE RESULTS">
                            <Menu.Item key="sub3g21">Sorting results</Menu.Item>
                            <Menu.Item key="sub3g22">Filtering</Menu.Item>
                            <Menu.Item key="sub3g23">Faceting</Menu.Item>
                            <Menu.Item key="sub3g24">Grouping results</Menu.Item>
                            <Menu.Item key="sub3g25">Geo location</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub3g3" title="RULES">
                            <Menu.Item key="sub3g31">Rules Overview</Menu.Item>
                            <Menu.Item key="sub3g32">Detecting intent</Menu.Item>
                            <Menu.Item key="sub3g33">Merchandising and promoting items</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub3g4" title="OPTIMIZE SEARCH RESULTS">
                            <Menu.Item key="sub3g41">Synonyms</Menu.Item>
                            <Menu.Item key="sub3g42">Typo tolerance</Menu.Item>
                            <Menu.Item key="sub3g43">Handling natural languages</Menu.Item>
                            <Menu.Item key="sub3g44">Empty or insufficient results</Menu.Item>
                            <Menu.Item key="sub3g45">Improve results with analytics</Menu.Item>
                            <Menu.Item key="sub3g46">Override engine defaults</Menu.Item>
                            <Menu.Item key="sub3g47">Troubleshooting relevance</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <LayoutOutlined />
                                <span>Building Search UI</span>
                            </span>
                        }
                    >
                        <Menu.ItemGroup key="sub4g1" title="REACT INSTANTSEARCH">
                            <Menu.Item key="sub4g11">What is React InstantSearch?</Menu.Item>
                            <Menu.Item key="sub4g12">Getting started</Menu.Item>
                            <Menu.Item key="sub4g13">Installation</Menu.Item>
                            <Menu.Item key="sub4g14">Upgrade guides</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub4g2" title="WIDGETS">
                            <Menu.Item key="sub4g21">Widgets showcase</Menu.Item>
                            <Menu.Item key="sub4g22">Customize an existing widget</Menu.Item>
                            <Menu.Item key="sub4g23">Create your own widgets</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub4g3" title="GOING FURTHER">
                            <Menu.Item key="sub4g31">Conditional display</Menu.Item>
                            <Menu.Item key="sub4g32">Conditional requests</Menu.Item>
                            <Menu.Item key="sub4g33">API keys/security</Menu.Item>
                            <Menu.Item key="sub4g34">Routing URLs</Menu.Item>
                            <Menu.Item key="sub4g35">Integrate Google Analytics</Menu.Item>
                            <Menu.Item key="sub4g36">Improve performance</Menu.Item>
                            <Menu.Item key="sub4g37">Native</Menu.Item>
                            <Menu.Item key="sub4g38">Back-end search</Menu.Item>
                            <Menu.Item key="sub4g39">Server-side rendering</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub4g4" title="RESOURCES">
                            <Menu.Item key="sub4g41">UI and UX patterns</Menu.Item>
                            <Menu.Item key="sub4g42">Demos</Menu.Item>
                            <Menu.Item key="sub4g43">InstantSearch Labs</Menu.Item>
                            <Menu.Item key="sub4g44">SEO-ready search experience checklist</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub4g5" title="TROUBLESHOOTING">
                            <Menu.Item key="sub4g51">FAQ</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        key="sub5"
                        title={
                            <span>
                                <PieChartOutlined />
                                <span>Getting Insights And Analytics</span>
                            </span>
                        }
                    >
                        <Menu.ItemGroup key="sub5g1" title="SEARCH ANALYTICS">
                            <Menu.Item key="sub5g11">Out-of-the-box analytics</Menu.Item>
                            <Menu.Item key="sub5g12">Click-through and conversion analytics</Menu.Item>
                            <Menu.Item key="sub5g13">Segmenting your analytics data</Menu.Item>
                            <Menu.Item key="sub5g14">Analytic metrics and reports</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub5g2" title="CONNECTORS">
                            <Menu.Item key="sub5g21">Google Tag Manager</Menu.Item>
                            <Menu.Item key="sub5g22">Segment</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub5g3" title="PERSONALIZATION">
                            <Menu.Item key="sub5g31">What is Personalization?</Menu.Item>
                            <Menu.Item key="sub5g32">Personalizing results</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="sub5g4" title="LEVERAGING ANALYTICS DATA">
                            <Menu.Item key="sub5g41">A/B testing</Menu.Item>
                            <Menu.Item key="sub5g42">Query Suggestions</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        key="sub6"
                        title={
                            <span>
                                <SafetyCertificateOutlined />
                                <span>Security</span>
                            </span>
                        }
                    >
                        <Menu.Item key="sub61">API keys</Menu.Item>
                        <Menu.Item key="sub62">Security best practices</Menu.Item>
                        <Menu.Item key="sub63">Algolia Vault</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub7"
                        title={
                            <span>
                                <GlobalOutlined />
                                <span>Going To Production</span>
                            </span>
                        }
                    >
                        <Menu.Item key="sub71">Implementation checklist</Menu.Item>
                        <Menu.Item key="sub72">Case study for an online clothing company</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub8"
                        title={
                            <span>
                                <ExpandAltOutlined />
                                <span>Scaling</span>
                            </span>
                        }
                    >
                        <Menu.Item key="sub81">Servers and clusters</Menu.Item>
                        <Menu.Item key="sub82">Distributed Search Network (DSN)</Menu.Item>
                        <Menu.Item key="sub83">Multi-Cluster Management (MCM)</Menu.Item>
                        <Menu.Item key="sub84">Scaling to larger datasets</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<SolutionOutlined />}>Solutions</Menu.Item>
                </Menu>
            </div >
        );
    }
}

export default Sider;