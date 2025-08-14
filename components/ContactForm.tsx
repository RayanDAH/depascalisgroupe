'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/jpg'];

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Le nom doit contenir au moins 2 caractères.',
  }),
  phone: z.string().min(10, {
    message: 'Veuillez entrer un numéro de téléphone valide.',
  }),
  email: z.string().email({
    message: 'Veuillez entrer une adresse email valide.',
  }),
  message: z.string().min(10, {
    message: 'Votre message doit contenir au moins 10 caractères.',
  }),
  files: z
    .custom<FileList>()
    .refine((files) => files.length === 0 || files.length <= 3, {
      message: "Vous pouvez télécharger jusqu'à 3 images.",
    })
    .transform((files) => (files.length > 0 ? Array.from(files) : []))
    .refine(
      (files) =>
        files.length === 0 || files.every((file) => file.size <= MAX_FILE_SIZE),
      {
        message: `La taille maximale des fichiers est de 5MB.`,
      }
    )
    .refine(
      (files) =>
        files.length === 0 ||
        files.every((file) => ACCEPTED_FILE_TYPES.includes(file.type)),
      {
        message: 'Seuls les fichiers JPG sont acceptés.',
      }
    ),
});

export default function ContactForm({ onSuccess = () => {} }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
      files: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API call to Airtable
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast.success('Votre message a été envoyé avec succès !');
      form.reset();
      setFileNames([]);
      onSuccess();
    }, 1500);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      const filesArray = Array.from(files);
      const fileNamesArray = filesArray.map((file) => file.name);
      setFileNames(fileNamesArray);
      form.setValue('files', filesArray);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nom</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre nom"
                    {...field}
                    className="border-white/10 bg-white/5 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Téléphone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre numéro de téléphone"
                    {...field}
                    className="border-white/10 bg-white/5 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre adresse email"
                  {...field}
                  className="border-white/10 bg-white/5 text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Décrivez votre projet ou votre demande"
                  rows={4}
                  {...field}
                  className="border-white/10 bg-white/5 text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="files"
          render={() => (
            <FormItem>
              <FormLabel className="text-white">
                Images (JPG uniquement, max 3)
              </FormLabel>
              <FormControl>
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-white/30 bg-white/5 p-6 transition-colors hover:border-white/50">
                  <Upload className="mb-2 h-10 w-10 text-white/70" />
                  <p className="mb-1 text-sm text-white/70">
                    Glissez-déposez vos images ou cliquez pour parcourir
                  </p>
                  <p className="mb-4 text-xs text-white/50">
                    JPG uniquement, 5MB max par fichier
                  </p>
                  {fileNames.length > 0 && (
                    <div className="mt-2 w-full">
                      <p className="mb-1 text-sm font-medium text-white">
                        Fichiers sélectionnés:
                      </p>
                      <ul className="space-y-1 text-xs text-white/70">
                        {fileNames.map((name, index) => (
                          <li key={index} className="flex items-center">
                            <span className="truncate">{name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Input
                    id="files"
                    type="file"
                    multiple
                    accept=".jpg,.jpeg"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            'Envoyer votre demande'
          )}
        </Button>
      </form>
    </Form>
  );
}
