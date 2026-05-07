export interface ImageAsset {
  src: string;
  alt: string;
}

export const galleryImages: readonly ImageAsset[] = [
  { src: '/gallery_alu_ograda.jpg', alt: 'Aluminum fence installation' },
  { src: '/gallery_alu_vrata_T_65.jpg', alt: 'Aluminum door T65 profile' },
  { src: '/gallery_alu_vrata_crna.jpg', alt: 'Black aluminum door' },
  { src: '/gallery_alu_vrata_termo_hrast.jpg', alt: 'Aluminum door thermal oak finish' },
  { src: '/gallery_garazna_trokrilna_vrata.jpg', alt: 'Garage triple-panel door' },
  { src: '/gallery_panelno_zatvaranje_balkona.jpg', alt: 'Panel balcony enclosure' },
  { src: '/gallery_roletne.jpg', alt: 'Roller shutters' },
  { src: '/gallery_vitanovici_alu_ograda.jpg', alt: 'Aluminum fence - Vitanovići' },
  { src: '/gallery_vrata_ulazna_termo_profil.jpg', alt: 'Entrance door thermal profile' },
];

export const productImages = {
  windows: { src: '/generic_alu_window.webp', alt: 'Aluminum windows' },
  doors: { src: '/generic_alu_door.jpg', alt: 'Aluminum door' },
  fences: { src: '/generic_alu_fence.jpg', alt: 'Aluminum fence' },
  production: { src: '/generic_nasa_proizvodnja.jpg', alt: 'Our production facility' },
} as const satisfies Record<string, ImageAsset>;
