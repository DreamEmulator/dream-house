import React, {useMemo} from 'react';
import * as THREE from 'three';

interface Props {
}

const Heart: React.FC<Props> = ({}) => {

    const shape = useMemo(() => {
        const x = 0, y = 0;
        const shape = new THREE.Shape()
        // From http://blog.burlock.org/html5/130-paths
        shape.moveTo(x + 0.25, y + 0.25)
            .bezierCurveTo(x + 0.25, y + 0.25, x + 0.20, y, x, y)
            .bezierCurveTo(x - 0.30, y, x - 0.30, y + 0.35, x - 0.30, y + 0.35)
            .bezierCurveTo(x - 0.30, y + 0.55, x - 0.10, y + 0.77, x + 0.25, y + 0.95)
            .bezierCurveTo(x + 0.60, y + 0.77, x + 0.80, y + 0.55, x + 0.80, y + 0.35)
            .bezierCurveTo(x + 0.80, y + 0.35, x + 0.80, y, x + 0.50, y)
            .bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);
        return shape;
    }, [])

    return (
        <mesh rotation={[Math.PI , 0, 0]} position={[0, 5, 0]}>
            <shapeGeometry args={[shape]}/>
            <meshBasicMaterial color='hotpink' side={THREE.DoubleSide}/>
        </mesh>
    )
};

export default Heart;
