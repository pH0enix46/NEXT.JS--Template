"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "~/ui/primitives/dialog";

export function GallerySection() {
  return (
    <section className={`
      bg-background py-12
      md:py-16
    `}
    id="gallery">
      <div className={`
        container mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      `}>
        <div className="mb-10 text-center">
          <h2 className={`
            text-3xl font-bold tracking-tight
            sm:text-4xl
            md:text-5xl
          `}>Our Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Explore our all production builded products</p>
        </div>
        <div className={`
          grid grid-cols-1 gap-4
          sm:grid-cols-2
          md:grid-cols-3 md:gap-6
        `}>
    
          {[1, 2, 3].map((num, index) => (
            <div className={`
              group relative h-64 overflow-hidden rounded-lg shadow-md
              sm:h-72
              md:h-80
            `} key={`product1-${index}`}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative h-full w-full cursor-pointer">
                    <img 
                      alt={`Gallery image 1-${index}`} 
                      className={`
                        h-full w-full object-cover transition-transform
                        duration-700 ease-in-out
                        group-hover:scale-110
                      `} 
                      src={`/product/${num}.jpg`}
                    />
                    <div className={`
                      pointer-events-none absolute inset-0 flex items-end
                      bg-black/30 opacity-0 transition-opacity duration-500
                      group-hover:opacity-100
                    `}>
                      <div className="w-full p-4 text-white">
                        <h3 className="text-lg font-medium">Culinary Delight 1</h3>
                        <p className="text-sm opacity-90">Experience the taste</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className={`
                  max-w-9xl! overflow-hidden border-none bg-black/80 p-0
                `}>
                  <img 
                    alt={`Gallery image 1-${index} (enlarged)`} 
                    className="max-h-[80vh] w-full object-contain"
                    src={`/product/${num}.jpg`}
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
          
         
          {[1, 3, 2].map((num, index) => (
            <div className={`
              group relative h-64 overflow-hidden rounded-lg shadow-md
              sm:h-72
              md:h-80
            `} key={`product2-${index}`}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative h-full w-full cursor-pointer">
                    <img 
                      alt={`Gallery image 2-${index}`} 
                      className={`
                        h-full w-full object-cover transition-transform
                        duration-700 ease-in-out
                        group-hover:scale-110
                      `} 
                      src={`/product/${num}.jpg`}
                    />
                    <div className={`
                      pointer-events-none absolute inset-0 flex items-end
                      bg-black/30 opacity-0 transition-opacity duration-500
                      group-hover:opacity-100
                    `}>
                      <div className="w-full p-4 text-white">
                        <h3 className="text-lg font-medium">Culinary Delight 2</h3>
                        <p className="text-sm opacity-90">Experience the taste</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className={`
                  max-w-4xl overflow-hidden border-none bg-black/80 p-0
                `}>
                  <img 
                    alt={`Gallery image 2-${index} (enlarged)`} 
                    className="max-h-[80vh] w-full object-contain"
                    src={`/product/${num}.jpg`}
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
          
          
          {[3, 2, 1].map((num, index) => (
            <div className={`
              group relative h-64 overflow-hidden rounded-lg shadow-md
              sm:h-72
              md:h-80
            `} key={`product3-${index}`}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative h-full w-full cursor-pointer">
                    <img 
                      alt={`Gallery image 3-${index}`} 
                      className={`
                        h-full w-full object-cover transition-transform
                        duration-700 ease-in-out
                        group-hover:scale-110
                      `} 
                      src={`/product/${num}.jpg`}
                    />
                    <div className={`
                      pointer-events-none absolute inset-0 flex items-end
                      bg-black/30 opacity-0 transition-opacity duration-500
                      group-hover:opacity-100
                    `}>
                      <div className="w-full p-4 text-white">
                        <h3 className="text-lg font-medium">Culinary Delight 3</h3>
                        <p className="text-sm opacity-90">Experience the taste</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className={`
                  max-w-4xl overflow-hidden border-none bg-black/80 p-0
                `}>
                  <img 
                    alt={`Gallery image 3-${index} (enlarged)`} 
                    className="max-h-[80vh] w-full object-contain"
                    src={`/product/${num}.jpg`}
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
