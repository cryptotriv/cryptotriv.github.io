import type { ImageMetadata } from 'astro';
import piece01 from '../assets/gallery/01.jpg';
import piece02 from '../assets/gallery/02.jpg';
import piece03 from '../assets/gallery/03.png';
import piece04 from '../assets/gallery/04.jpg';
import piece05 from '../assets/gallery/05.jpg';
import piece06 from '../assets/gallery/06.png';
import piece07 from '../assets/gallery/07.png';
import piece08 from '../assets/gallery/08.png';
import piece09 from '../assets/gallery/09.jpg';
import piece10 from '../assets/gallery/10.jpg';
import piece11 from '../assets/gallery/11.webp';
import piece12 from '../assets/gallery/12.webp';
import piece13Poster from '../assets/gallery/13-poster.webp';
import piece14 from '../assets/gallery/14.webp';
import piece15 from '../assets/gallery/15.webp';
import piece16 from '../assets/gallery/16.webp';
import piece17 from '../assets/gallery/17.webp';
import piece18 from '../assets/gallery/18.webp';
import piece19 from '../assets/gallery/19.webp';
import piece20 from '../assets/gallery/20.webp';
import piece21 from '../assets/gallery/21.webp';
import piece22 from '../assets/gallery/22.webp';
import piece23 from '../assets/gallery/23.webp';
import piece24 from '../assets/gallery/24.webp';

export type GalleryPiece =
  | { kind: 'image'; src: ImageMetadata; alt: string }
  | { kind: 'video'; src: string; poster: ImageMetadata; alt: string };

export const gallery: GalleryPiece[] = [
  { kind: 'image', src: piece01, alt: 'Triv with glowing headphones on a magenta background' },
  { kind: 'image', src: piece02, alt: 'Triv in a purple scarf and white hoodie' },
  { kind: 'image', src: piece03, alt: 'Triv smiling in a grey hoodie on a magenta background' },
  { kind: 'image', src: piece04, alt: 'Sketch-style close-up of Triv with glowing headphones' },
  { kind: 'image', src: piece05, alt: 'Moody painted portrait of Triv in a blue jacket' },
  { kind: 'image', src: piece06, alt: 'Chibi Triv with a laptop in a round badge' },
  { kind: 'image', src: piece07, alt: 'Triv in a black lace dress adjusting her headphones' },
  { kind: 'image', src: piece08, alt: 'Triv in an open jacket against a summer sky' },
  { kind: 'image', src: piece09, alt: 'Triv in a purple scarf and white hoodie, alternate version' },
  { kind: 'image', src: piece10, alt: 'Wide illustration of several Triv characters around a desk setup' },
  { kind: 'image', src: piece11, alt: 'Triv in a white hoodie resting her head on her hand' },
  { kind: 'image', src: piece12, alt: 'Triv at a neon-lit computer desk seen through a fisheye lens' },
  { kind: 'video', src: '/gallery/13.mp4', poster: piece13Poster, alt: 'Pixel-art animation of Triv turning around to wave inside a retro desktop window' },
  { kind: 'image', src: piece14, alt: 'Full-length Triv in a swimsuit and open jacket against a summer sky' },
  { kind: 'image', src: piece15, alt: 'Triv in a patterned jacket under a starry sky' },
  { kind: 'image', src: piece16, alt: 'Triv in a black lace dress adjusting her headphones, high-resolution version' },
  { kind: 'image', src: piece17, alt: 'Triv in a cat-ear hoodie against a neon screen backdrop' },
  { kind: 'image', src: piece18, alt: 'Chibi-style Triv surrounded by glitchy pixel shapes' },
  { kind: 'image', src: piece19, alt: 'Triv in a ruffled white collar against a dark background' },
  { kind: 'image', src: piece20, alt: 'Triv riding a bicycle beneath cherry blossoms' },
  { kind: 'image', src: piece21, alt: 'Triv holding a handheld game console among blue sparkles' },
  { kind: 'image', src: piece22, alt: 'Full-body Triv typing on a laptop on a magenta background' },
  { kind: 'image', src: piece23, alt: 'Triv tangled in headphone cables on a pink background' },
  { kind: 'image', src: piece24, alt: 'Triv in a black gothic lolita dress on a pink background' },
];
