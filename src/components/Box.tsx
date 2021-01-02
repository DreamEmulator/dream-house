import React, {useRef, useState} from 'react';

interface Props {
    scale?: any;
    position?: any;
    color?: any;
}

const Box: React.FC<Props> = (props) => {
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={state.isHovered ? [15, 15, 15] : [10, 10, 10]}
            onClick={(e) => setState({...state, isActive: !state.isActive,})}
            onPointerOver={(e) => setState({...state, isHovered: true})}
            onPointerOut={(e) => setState({...state, isHovered: false})}>
            <boxBufferGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={state.isActive ? '#820263' : '#D90368'}/>
        </mesh>
    )
}

export default Box;
