import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MicIcon from '@mui/icons-material/Mic';
import WavesIcon from '@mui/icons-material/Waves';
import CircleIcon from '@mui/icons-material/Circle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import GrainIcon from '@mui/icons-material/Grain';

const Logos = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-8 gap-8">
      {/* Logo 1 */}
      <div className="flex  items-center">
        <CameraAltIcon className="text-6xl " />
        <p className="text-xl font-semibold">logoipsum</p>
      </div>

      {/* Logo 2 */}
      <div className="flex  items-center">
        <MicIcon className="text-6xl " />
        <p className="text-xl font-semibold">LOGOIPSUM</p>
      </div>

      {/* Logo 3 */}
      <div className="flex  items-center">
        <WavesIcon className="text-6xl " />
        <p className="text-xl font-semibold">logoipsum</p>
      </div>

      {/* Logo 4 */}
      <div className="flex  items-center justify-center">
        <CircleIcon className="text-6xl " />
        <p className="text-xl font-semibold">logoipsum</p>
      </div>

      {/* Logo 5 */}
      <div className="flex  items-center">
        <VolumeUpIcon className="text-6xl " />
        <p className="text-xl font-semibold">LOGOIPSUM</p>
      </div>

      {/* Logo 6 */}
      <div className="flex items-center">
        <GrainIcon className="text-6xl " />
        <p className="text-xl font-semibold">logoipsum</p>
      </div>
    </div>
  );
};

export default Logos;
