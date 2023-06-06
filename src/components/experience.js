import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { GiCancel } from 'react-icons/gi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai'
import Slider from '@mui/material/Slider';
import LabeledValuesSlider from './slider';

export default function Experience() {
    const [inputSkill, setInputSkill] = useState("");
    const [showAddSkill, setShowAddSkill] = useState(false);
    const [skillPercentage, setSkillPercentage] = useState(0);
    const [showTool, setShowTool] = useState(false);
    const [inputTool, setInputTool] = useState("")
    const [toolPercentage, setToolPercentage] = useState(0);

    const [skills, setSkills] = useState([
        {
            skillName: "Content Writing",
            skillPercentage: "75"
        },
        {
            skillName: "SEO",
            skillPercentage: "50"
        },
        {
            skillName: "Google Ads",
            skillPercentage: "25"
        }
    ]);

    const [tools, setTools] = useState([
        {
            toolName: "Adobe Illustrator",
            toolPercentage: "75"
        },
        {
            toolName: "Lightroom",
            toolPercentage: "50"
        },
        {
            toolName: "Adobe",
            toolPercentage: "25"
        }
    ]);

    let [individualContribution, setindividualContribution] = useState(50);

    const marks = [
        {
            value: 0,
            label: 'Very Low',
        },
        {
            value: 25,
            label: 'Low',
        },
        {
            value: 50,
            label: 'Moderate',
        },
        {
            value: 75,
            label: 'High',
        },
        {
            value: 100,
            label: 'Very High'
        }
    ];

    const marksContribution = [
        {
            value: 0,
            label: "Individual Contribution"
        },
        {
            value: 100,
            label: "Team Management"
        }
    ];

    const user = {
        _id: "123",
        firstName: "Bracken",
        lastName: "Darrell",
        userName: "",
        email: "",
        profilePicUrl: "",
        jobDetails: [{
            organizationId: "",
            position: "CEO",
            timePeriod: "January 2013 - Present",
            description: "Logitech's CEO Description"
        }]
    };

    const organization = {
        name: "Logitech",
        website: ""
    };

    const clearSkill = () => {
        setShowAddSkill(false);
        setInputSkill("");
        setSkillPercentage(0);
    };

    const clearTool = () => {
        setShowTool(false);
        setInputTool("");
        setToolPercentage(0);
    };

    const addSkill = () => {
        skills.push({
            ...skills,
            skillName: inputSkill,
            skillPercentage: skillPercentage
        })
        skillsSort();
        setShowAddSkill(false);
        setInputSkill("");
        setSkillPercentage(0);
    };

    const addTool = () => {
        tools.push({
            ...tools,
            toolName: inputTool,
            toolPercentage: toolPercentage
        })
        toolsSort();
        setShowTool(false);
        setInputTool("");
        setToolPercentage(0);
    };

    const handleSkillDelete = (ind) => {
        skills.splice(ind, 1);
        setSkills([...skills])
    };

    const handleToolDelete = (ind) => {
        tools.splice(ind, 1);
        setTools([...tools]);
    };

    const toolsSort = () => {
        tools.sort((a, b) => b.toolPercentage - a.toolPercentage);
    }

    const skillsSort = () => {
        skills.sort((a, b) => b.skillPercentage - a.skillPercentage);
    }

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <Row sm={2} className='center'>
                        <Col>
                            <Image src="/logitech-logo-01.png" thumbnail />
                        </Col>
                        <Col style={{ fontWeight: "bold", fontSize: "18px", textDecorationLine: "underline" }}>
                            {organization.name}
                            <br />
                            {user.jobDetails[0].position}
                        </Col>
                    </Row >
                    <br />
                    <Row sm={2} style={{ textDecorationLine: "underline" }} >
                        {user.jobDetails[0].timePeriod}
                        <br></br>
                        {"(10 Years and 2 Months)"}
                    </Row>
                    <br />
                    <Row sm={2}>
                        <p style={{ border: "2px solid lightgray" }}>{user.jobDetails[0].description}</p>
                    </Row>
                </Col>

                <Col sm={8}>
                    <Form>
                        <Form.Group as={Row}>
                            {skills.map((skill, ind) => (
                                <Row key={ind} className='center'>
                                    <Form.Label column sm="2" className='label' style={{ marginTop: '30px' }}>
                                        {skill.skillName}
                                    </Form.Label>
                                    <Col sm="8">
                                        <div style={{ position: 'relative', marginTop: '40px' }}>
                                            <Slider
                                                value={skill.skillPercentage}
                                                step={25}
                                                onChange={(e) => {
                                                    skills[ind].skillPercentage = e.target.value;
                                                    setSkills([...skills]);
                                                }}
                                            />
                                            {ind === 0 && (
                                                <div style={{ position: 'absolute', top: '-40px', left: '0', right: '0', display: 'flex', justifyContent: 'space-between' }}>
                                                    {marks.map((mark, index) => (
                                                        <span key={index} style={{ position: "absolute", left: `${mark.value}%`, transform: "translateX(-50%)", whiteSpace: 'nowrap' }}>{mark.label}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                    <Form.Label column sm="2" className='label' style={{ marginTop: '30px' }}>
                                        {skill.skillPercentage + "%"}
                                        <Button variant="outline-danger" onClick={() => { handleSkillDelete(ind) }} style={{ marginLeft: "5px" }}>
                                            <AiOutlineDelete />
                                        </Button>
                                    </Form.Label>
                                </Row>
                            ))}

                            {showAddSkill &&
                                <Row className='center'>
                                    <Form.Label column sm="2">
                                        <input type='text' placeholder='Skill Name' style={{ width: "85%" }} onChange={(e) => setInputSkill(e.target.value)}></input>
                                    </Form.Label>
                                    <Col sm="8">
                                        <LabeledValuesSlider percentage={setSkillPercentage} />
                                    </Col>
                                    <Form.Label column sm="2">
                                        <Button variant="outline-danger" onClick={() => { clearSkill() }}>
                                            <GiCancel />
                                        </Button>
                                        <Button variant="outline-primary" onClick={() => { addSkill() }} style={{ marginLeft: "3px" }}>
                                            <AiOutlinePlusCircle />
                                        </Button>
                                    </Form.Label>
                                </Row>
                            }
                        </Form.Group>

                        <Button variant="link" style={{ display: "block" }} onClick={() => { setShowAddSkill(true) }}>+ Add a Skill</Button>

                        <Form.Group as={Row}>
                            {tools.map((tool, ind) => (
                                <Row key={ind} className='center'>
                                    <Form.Label column sm="2" className='label' style={{ marginTop: '30px' }}>
                                        {tool.toolName}
                                    </Form.Label>
                                    <Col sm="8">
                                        <div style={{ position: 'relative', marginTop: '40px' }}>
                                            <Slider
                                                value={tool.toolPercentage}
                                                step={25}
                                                onChange={(e) => {
                                                    tools[ind].toolPercentage = e.target.value;
                                                    setTools([...tools]);
                                                }}
                                            />
                                            {ind === 0 && (
                                                <div style={{ position: 'absolute', top: '-40px', left: '0', right: '0', display: 'flex', justifyContent: 'space-between' }}>
                                                    {marks.map((mark, index) => (
                                                        <span key={index} style={{ position: "absolute", left: `${mark.value}%`, transform: "translateX(-50%)", whiteSpace: 'nowrap' }}>{mark.label}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                    <Form.Label column sm="2" className='label' style={{ marginTop: '30px' }}>
                                        {tool.toolPercentage + "%"}
                                        <Button variant="outline-danger" onClick={() => { handleToolDelete(ind) }} style={{ marginLeft: "5px" }}>
                                            <AiOutlineDelete />
                                        </Button>
                                    </Form.Label>
                                </Row>
                            ))}

                            {showTool &&
                                <Row className='center'>
                                    <Form.Label column sm="2">
                                        <input type='text' placeholder='Tool Name' style={{ width: "85%" }} onChange={(e) => setInputTool(e.target.value)}></input>
                                    </Form.Label>
                                    <Col sm="8">
                                        <LabeledValuesSlider percentage={setToolPercentage} />
                                    </Col>
                                    <Form.Label column sm="2">
                                        <Button variant="outline-danger" onClick={() => { clearTool() }}>
                                            <GiCancel />
                                        </Button>
                                        <Button variant="outline-primary" onClick={() => { addTool() }} style={{ marginLeft: "3px" }}>
                                            <AiOutlinePlusCircle />
                                        </Button>
                                    </Form.Label>
                                </Row>
                            }
                        </Form.Group>

                        <Button variant="link" style={{ display: "block" }} onClick={() => { setShowTool(true) }}>+ Add a Tool</Button>

                        <Row >
                            <Form.Label column sm="2" className='label' style={{ marginTop: '30px' }}>
                                {individualContribution + "%"}
                            </Form.Label>
                            <Col sm="8">
                                <div style={{ position: 'relative', marginTop: '40px' }}>
                                    <Slider
                                        value={individualContribution}
                                        step={25}
                                        onChange={(e) => setindividualContribution(e.target.value)}
                                    />
                                    <div style={{ position: 'absolute', top: '-40px', left: '0', right: '0', display: 'flex', justifyContent: 'space-between' }}>
                                        {marksContribution.map((mark, index) => (
                                            <span key={index} style={{ position: "absolute", left: `${mark.value}%`, transform: "translateX(-50%)", whiteSpace: 'nowrap' }}>{mark.label}</span>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Form.Label column sm="2" className='label' style={{ marginTop: '30px' }}>
                                {100 - individualContribution + "%"}
                            </Form.Label>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}