import type { ImageMetadata } from 'astro';
import piece01 from '../assets/gallery/01.jpg';
import piece03 from '../assets/gallery/03.png';
import piece04 from '../assets/gallery/04.jpg';
import piece05 from '../assets/gallery/05.jpg';
import piece07 from '../assets/gallery/07.png';
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
  | { number: number; kind: 'image'; src: ImageMetadata; alt: string }
  | { number: number; kind: 'video'; src: string; poster: ImageMetadata; alt: string };

export const gallery: GalleryPiece[] = [
  { number: 1, kind: 'image', src: piece01, alt: 'Triv with glowing headphones on a magenta background' },
  { number: 3, kind: 'image', src: piece03, alt: 'Triv smiling in a grey hoodie on a magenta background' },
  { number: 4, kind: 'image', src: piece04, alt: 'Sketch-style close-up of Triv with glowing headphones' },
  { number: 5, kind: 'image', src: piece05, alt: 'Moody painted portrait of Triv in a blue jacket' },
  { number: 7, kind: 'image', src: piece07, alt: 'Triv in a black lace dress adjusting her headphones' },
  { number: 9, kind: 'image', src: piece09, alt: 'Triv in a purple scarf and white hoodie' },
  { number: 10, kind: 'image', src: piece10, alt: 'Wide illustration of several Triv characters around a desk setup' },
  { number: 11, kind: 'image', src: piece11, alt: 'Triv in a white hoodie resting her head on her hand' },
  { number: 12, kind: 'image', src: piece12, alt: 'Triv at a neon-lit computer desk seen through a fisheye lens' },
  { number: 13, kind: 'video', src: '/gallery/13.mp4', poster: piece13Poster, alt: 'Pixel-art animation of Triv turning around to wave inside a retro desktop window' },
  { number: 14, kind: 'image', src: piece14, alt: 'Full-length Triv in a swimsuit and open jacket against a summer sky' },
  { number: 15, kind: 'image', src: piece15, alt: 'Triv in a patterned jacket under a starry sky' },
  { number: 16, kind: 'image', src: piece16, alt: 'Triv in a black lace dress adjusting her headphones, high-resolution version' },
  { number: 17, kind: 'image', src: piece17, alt: 'Triv in a cat-ear hoodie against a neon screen backdrop' },
  { number: 18, kind: 'image', src: piece18, alt: 'Chibi-style Triv surrounded by glitchy pixel shapes' },
  { number: 19, kind: 'image', src: piece19, alt: 'Triv in a ruffled white collar against a dark background' },
  { number: 20, kind: 'image', src: piece20, alt: 'Triv riding a bicycle beneath cherry blossoms' },
  { number: 21, kind: 'image', src: piece21, alt: 'Triv holding a handheld game console among blue sparkles' },
  { number: 22, kind: 'image', src: piece22, alt: 'Full-body Triv typing on a laptop on a magenta background' },
  { number: 23, kind: 'image', src: piece23, alt: 'Triv tangled in headphone cables on a pink background' },
  { number: 24, kind: 'image', src: piece24, alt: 'Triv in a black gothic lolita dress on a pink background' },
];
