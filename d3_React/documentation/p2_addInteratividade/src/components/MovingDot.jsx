import { useState } from "react";

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    const nextPosition = {};

    return(
        <div
            onPointerMove={e => {
                nextPosition.x = e.clientX;
                nextPosition.y = e.clientY;

                setPosition(nextPosition);
            }}

            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                }}
            >

            </div>

        </div>
    );
}