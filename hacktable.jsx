import { Button } from '@/components/ui/button';

export default function Hacktable() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-extrabold text-white">Hacktable BETA</h1>
      <p className="mt-4 text-lg text-white">
        A free Airtable replacement for HackClubbers.
      </p>
      <Button
        className="mt-6 bg-red-600 text-xl text-white hover:bg-red-700 py-3 px-6"
        onClick={() => window.location.href = 'https://docs.hacktable.org'}
      >
        Docs
      </Button>
    </div>
  );
}
